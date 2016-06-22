import React, {Component} from 'react';
import { connect }        from 'react-redux';
import Todo               from '../../components/todo';
import TodosActions       from '../../actions/todos';

class TodoIndexView extends Component {
  _renderTodos(todos) {
    return todos.map((todo) =>{
      return <Todo key={todo.id} dispatch={this.props.dispatch} {...todo} />;
    });
  }

  render() {
    return (
      <div className="view-container todos index">
        {::this._renderTodos(this.props.todos)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  todos:    state.todos.todos,
  fetching: state.todos.fetching
});

export default connect(mapStateToProps)(TodoIndexView);
