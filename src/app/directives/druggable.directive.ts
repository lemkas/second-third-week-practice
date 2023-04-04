import { DOCUMENT } from '@angular/common';
import {
  Directive,
  ElementRef,
  Inject,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';

@Directive({
  selector: '[Draggable]',
})
export class DruggableDirective implements OnInit, OnDestroy {
  private subscriptions: Subscription[] = [];
  private element!: HTMLElement;
  private dragSub!: Subscription;
  private dragStartSub!: Subscription;
  private dragEndSub!: Subscription;

  constructor(
    private elementRef: ElementRef,
    @Inject(DOCUMENT) private document: HTMLDocument
  ) {}

  ngOnInit(): void {
    this.element = this.elementRef.nativeElement as HTMLElement;
    this.initDrug();
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((s) => s?.unsubscribe());
  }

  private setTransform(xPos: number, yPos: number): void {
    this.element.style.transform = `translate3d(${xPos}px, ${yPos}px, 0)`;
  }

  initDrug(): void {
    const dragStart = fromEvent<MouseEvent>(this.element, 'mousedown');
    const dragEnd = fromEvent<MouseEvent>(this.element, 'mouseup');
    const drag = fromEvent<MouseEvent>(this.element, 'mouseover');

    let currentX: number,
      currentY: number,
      initialX: number,
      initialY: number,
      xOffset: number = 0,
      yOffset: number = 0;

    this.dragStartSub = dragStart.subscribe((e) => {
      initialX = e.clientX - xOffset;
      initialY = e.clientY - yOffset;

      console.log(initialX, initialY);
    });

    this.dragSub = drag.subscribe((e) => {
      e.preventDefault();

      currentX = e.clientX - initialX;
      currentY = e.clientY - initialY;

      this.setTransform(currentX, currentY);
    });

    this.dragEndSub = dragEnd.subscribe((e) => {
      initialX = currentX;
      initialY = currentY;
      console.log(initialX, initialY);
    });
  }
}
