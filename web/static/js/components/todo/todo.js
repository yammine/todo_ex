import React, { Component } from 'react';
import Actions              from '../../actions/todos';

export default class Todo extends Component {
  _handleTodoToggle() {
    let { dispatch } = this.props;
    dispatch(Actions.toggleTodo({ ...this.props, done: !this.props.done }, this.props.index));
  };

  _handleTodoDelete() {
    let { dispatch } = this.props;
    dispatch(Actions.deleteTodo(this.props, this.props.index));
  };

  render() {

    let boxStyles = {height: '10px', width: '10px', display: 'inline-flex'};
    let deleteStyles = {height: '13px', width: '13px', display: 'inline-flex', border: 'black 1px solid'}
    if (this.props.done) {
      boxStyles.backgroundColor = 'blue';
    } else {
      boxStyles.backgroundColor = 'red';
    };

    return (
      <div id={"todo_"+this.props.id} className="todo">
        <div className="inner">
          <span>
            {this.props.title}
            <span style={boxStyles} onClick={::this._handleTodoToggle}></span>
            <span style={deleteStyles} onClick={::this._handleTodoDelete}></span>
          </span>
        </div>
      </div>
    );
  };
};
