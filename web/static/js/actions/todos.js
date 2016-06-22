import Constants from '../constants';
import { httpGet } from '../utils';

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
  }
}

export default Actions;
