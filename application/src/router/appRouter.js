import React from 'react';
import { Router, Route, Redirect } from "react-router-dom";
import { connect } from 'react-redux';

import { Main, Login, OrderForm, ViewOrders, EditOrder } from '../components';
import RequireAuth from './requireAuth';
import history from '../history';

const mapStateToProps = (state) => {
  return { auth: state.auth }
}

const AppRouter = (props) => {
  return (
    <Router history={history}>
      <Route path="/" exact component={Main} />
      <Route path="/login" exact component={Login} />
      <RequireAuth path="/order" exact component={OrderForm} token={props.auth.token} />
      <RequireAuth path="/edit-order/:id" exact component={EditOrder} token={props.auth.token} />
      <RequireAuth path="/view-orders" exact component={ViewOrders} token={props.auth.token} />
    </Router>
  );
}

export default connect(mapStateToProps)(AppRouter);