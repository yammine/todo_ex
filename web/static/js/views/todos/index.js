import React, {Component} from 'react';
import { connect }        from 'react-redux';
import Todo               from '../../components/todo/todo';
import TodoForm           from '../../components/todo/form';

class TodoIndexView extends Component {
  _renderTodos(todos) {
    return todos.map((todo, index) =>{
      return <Todo key={todo.id} dispatch={this.props.dispatch} index={index} {...todo} />;
    });
  }

  render() {
    let { dispatch } = this.props;
    return (
      <div className="view-container todos index">
        <TodoForm dispatch={dispatch} title={this.props.title}/>
        {::this._renderTodos(this.props.todos)}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  title:    state.todos.form.title,
  todos:    state.todos.todos,
  fetching: state.todos.fetching
});

export default connect(mapStateToProps)(TodoIndexView);
