export interface ITodo {
  text: string;
  status: TODOSTATUS;
}

export enum TODOSTATUS {
  ALL = 'all',
  DONE = 'done',
  INPROGRESS = 'in progress',
  ARCHIVE = 'arhive',
}
