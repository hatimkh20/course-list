import { courseReducer } from './course.reducer';
import { ActionReducerMap } from '@ngrx/store';
import { CourseState } from '../models/state.model';

export const rootReducer = {};

export interface AppState {
    courseList: CourseState;
};

export const courseReducers: ActionReducerMap<AppState, any> = {
    courseList: courseReducer
};
