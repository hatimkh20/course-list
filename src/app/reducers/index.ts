import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { BookState } from '../books/models/state.model';
import { bookReducer } from '../books/reducers/book.reducer';
import { CourseState } from '../course/models/state.model';
import { courseReducer } from '../course/reducers/course.reducer';

export interface State {
    courseList: CourseState,
    bookList: BookState
}

export const reducers: ActionReducerMap<State, any> = {
  courseList: courseReducer,
  bookList: bookReducer
};
