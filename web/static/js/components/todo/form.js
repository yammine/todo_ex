import React, { Component } from 'react';
import Actions              from '../../actions/todos';

export default class TodoForm extends Component {
  _handleSubmitTodo(e) {
    e.preventDefault();

    let { dispatch } = this.props;
    const title = this.refs.title.value
    dispatch(Actions.createTodo({title: title}))
  }

  _handleChange(e) {
    let { dispatch } = this.props;
    dispatch(Actions.updateForm({title: this.refs.title.value}));
  }

  render() {
    return (
      <form id="todo_form" onSubmit={::this._handleSubmitTodo}>
        <input
          ref="title"
          id="todo_title"
          type="text"
          placeholder="Some text here..."
          required="true"
          value={this.props.title}
          onChange={::this._handleChange}/>
        <button type="submit">Create todo</button>
      </form>
    );
  };
};
