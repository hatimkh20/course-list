// import the interface
import { BookAction, BookActionType } from '../actions/book.action';
import { BookState } from '../models/state.model';
//create a dummy initial state
const initialState: BookState = {
  books: [
    {
      id: '1',
      name: 'Algorithms',
      author: "Robert Sedgewick"
    },
  ],
};

export function bookReducer(
  state: BookState = initialState,
  action: BookAction
): BookState {
  switch (action.type) {
    case BookActionType.ADD_ITEM:
      return {
        ...state,
        books: [...state.books, action.payload],
      };
    default:
      return state;
  }
}
