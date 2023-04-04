import { DOCUMENT } from '@angular/common';
import { Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { fromEvent, Subscription, takeUntil } from 'rxjs';

@Directive({
  selector: '[Draggable]',
})
export class DruggableDirective implements OnInit {
  private element!: HTMLElement;
  dragSub!: Subscription;
  dragStartSub!: Subscription;
  dragEndSub!: Subscription;
  isDragging: boolean = false;

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: HTMLDocument
  ) {}

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement as HTMLElement;
    this.initDrug();
  }

  private setTransform(xPos: number, yPos: number): void {
    this.element.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }

  initDrug(): void {
    const dragStart = fromEvent<MouseEvent>(this.element, 'mousedown');
    const dragEnd = fromEvent<MouseEvent>(this.document, 'mouseup');
    const drag = fromEvent<MouseEvent>(this.document, 'mouseover');

    let currentX: number = 0,
      currentY: number = 0,
      initialX: number,
      initialY: number;

    this.dragStartSub = dragStart.subscribe((e: MouseEvent) => {
      initialX = e.clientX - currentX;
      initialY = e.clientY - currentY;

      if (e.target === this.element) {
        this.isDragging = true;
      }
    });

    this.dragSub = drag.subscribe((e: MouseEvent) => {
      if (this.isDragging) {
        e.preventDefault();

        currentX = e.clientX - initialX;
        currentY = e.clientY - initialY;

        this.setTransform(currentX, currentY);
      }
    });

    this.dragEndSub = dragEnd.subscribe((e: MouseEvent) => {
      initialX = currentX;
      initialY = currentY;
      this.isDragging = false;
    });
  }
}
