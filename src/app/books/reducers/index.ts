import { bookReducer } from './book.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { BookState } from '../models/state.model';

export const rootReducer = {};

export interface AppState {
    bookList: BookState;
};

export const bookReducers: ActionReducerMap<AppState, any> = {
    bookList: bookReducer
};
