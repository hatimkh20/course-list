import { Action } from '@ngrx/store';
import { BookItem } from '../models/bookItem.model';
export enum BookActionType {
  ADD_ITEM = '[Table] Add Books',
}
export class AddBookItemAction implements Action {
  readonly type = BookActionType.ADD_ITEM;
  //add an optional payload
  constructor(public payload: BookItem) {}
}
export type BookAction = AddBookItemAction;