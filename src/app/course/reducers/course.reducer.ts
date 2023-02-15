// import the interface
import { CourseAction, CourseActionType } from '../actions/course.action';
import { CourseState } from '../models/state.model';
//create a dummy initial state
const initialState: CourseState = {
  courses: [
    {
      id: '1',
      department: 'Computer Engineering',
      name: 'C++ Programming',
    },
  ],
};

export function courseReducer(
  state: CourseState = initialState,
  action: CourseAction
): CourseState {
  switch (action.type) {
    case CourseActionType.ADD_ITEM:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };
    default:
      return state;
  }
}
