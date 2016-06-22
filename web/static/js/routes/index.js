import { IndexRoute, Route } from 'react-router';
import React                 from 'react';
import TodosContainer        from '../containers/todos';
import MainLayout            from '../layouts/main';
import TodoIndexView         from '../views/todos/index';

export default function configRoutes(store) {
  return (
    <Route component={TodosContainer}>
      <Route component={MainLayout}>
        <Route  path="/" component={TodoIndexView}></Route>
      </Route>
    </Route>
  )
}
