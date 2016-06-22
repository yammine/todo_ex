import React, { Component } from 'react';

export default class Todo extends Component {
  render() {
    return (
      <div id={"todo_"+this.props.id} className="todo">
        <div className="inner">
          <h4>{this.props.title}</h4>
        </div>
      </div>
    )
  }
}
