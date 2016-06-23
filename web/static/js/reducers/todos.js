import Constants from '../constants';
import { update } from 'react-addons-update'

const initialState = {
  previousTodos: [],
  todos: [],
  futureTodos: [],
  fetching: false,
  form: {
    title: ''
  }
}

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case Constants.TODOS_FETCHED:
      return { ...state, fetching: true };
    case Constants.TODOS_RECEIVED:
      return {
        ...state,
        todos: action.todos,
        fetching: false
      };
    case Constants.TODO_CREATED:
      return {
        ...state,
        previousTodos: state.todos,
        todos: [
          ...state.todos,
          action.todo
        ],
        form: {
          title: ''
        }
      }
    case Constants.UPDATED_TODO_FORM:
      return {
        ...state,
        form: {
          title: action.title
        }
      }
    case Constants.TODO_TOGGLED:
      return {
        ...state,
        previousTodos: state.todos,
        todos: [
          ...state.todos.slice(0, action.index),
          action.todo,
          ...state.todos.slice(action.index +1)
        ]
      }
    case Constants.TODO_DELETED:
      return {
        ...state,
        previousTodos: state.todos,
        todos: [
          ...state.todos.slice(0, action.index),
          ...state.todos.slice(action.index +1)
        ]
      }
    default:
      return state;
  }
}
