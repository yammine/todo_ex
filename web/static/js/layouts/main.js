import React, { Component } from 'react';
import { connect }          from 'react-redux';
import { Link }             from 'react-router';

class MainLayout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}

export default MainLayout;
