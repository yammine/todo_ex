import Constants from '../constants';

const initialState = {
  todos: [],
  fetching: false
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.TODOS_FETCHED:
      return { ...state, fetching: true };
    case Constants.TODOS_RECEIVED:
      return { ...state, todos: action.todos, fetching: false };
    default:
      return state;
  }
}
