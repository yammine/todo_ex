import Constants from '../constants';
import { httpGet, httpPost, httpPut, httpDelete } from '../utils';

const Actions = {
  fetchTodos: () => {
    return dispatch => {
      dispatch({ type: Constants.TODOS_FETCHED });

      httpGet('/api/todos')
      .then((data) => {
        dispatch({
          type: Constants.TODOS_RECEIVED,
          todos: data.todos
        });
      });
    };
  },
  createTodo: (todo) => {
    return dispatch => {
      dispatch({ type: Constants.TODO_SUBMITTED, todo: todo });

      httpPost('/api/todos', { todo: todo })
      .then((data) => {
        dispatch({
          type: Constants.TODO_CREATED,
          todo: data
        });
      });
    };
  },
  updateForm: (values) => {
    return dispatch => {
      dispatch({
        type: Constants.UPDATED_TODO_FORM,
        title: values.title
      });
    };
  },
  toggleTodo: (todo, index) => {
    return dispatch => {
      dispatch({type: Constants.ATTEMPTED_TODO_TOGGLE, todo: todo});

      httpPut('/api/todos/' + todo.id, {todo: todo})
      .then((data) => {
        dispatch({
          type: Constants.TODO_TOGGLED,
          todo: data,
          index: index
        });
      });
    };
  },
  deleteTodo: (todo, index) => {
    return dispatch => {
      dispatch({type: Constants.ATTEMPTED_TODO_DELETE, todo: todo});

      httpDelete('/api/todos/'+todo.id)
      .then((data) => {
        dispatch({type: Constants.TODO_DELETED, index: index});
      });
    }
  }
}

export default Actions;
