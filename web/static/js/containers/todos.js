import React        from 'react';
import { connect }  from 'react-redux';
import Actions      from '../actions/todos';

class TodosContainer extends React.Component {
  componentDidMount() {
    const { dispatch } = this.props; // this.props is our Store
    dispatch(Actions.fetchTodos());
  }

  render() {
    return (
      <div id="todos_container">
        {this.props.children}
      </div>
    );
  }
}

const mapStateToProps = (state) => (state);

export default connect(mapStateToProps)(TodosContainer);
