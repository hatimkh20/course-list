import { ActionReducerMap, combineReducers } from '@ngrx/store';
import { BookState } from '../books/models/state.model';
import { bookReducers } from '../books/reducers';
import { bookReducer } from '../books/reducers/book.reducer';
import { CourseState } from '../course/models/state.model';
import { courseReducers } from '../course/reducers';
import { courseReducer } from '../course/reducers/course.reducer';

export interface State {
    courseList: CourseState,
    bookList: BookState
}

export const reducers: ActionReducerMap<State, any> = {
  courseList: courseReducer,
  bookList: bookReducer
};

// export const rootReducer = combineReducers({
//   bookList: bookReducers.bookList,
//   courseList: courseReducers.courseList
// });
