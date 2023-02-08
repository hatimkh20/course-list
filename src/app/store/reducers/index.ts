import { courseReducer } from './course.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { CourseState } from '../models/state.model';

export const rootReducer = {};

export interface AppState {
    courseList: CourseState;
};

export const reducers: ActionReducerMap<AppState, any> = {
    courseList: courseReducer
};
