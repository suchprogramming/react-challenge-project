import React from 'react';
import { Route, Redirect } from 'react-router-dom';

class RequireAuth extends React.Component {
    render() {
        const { component: Component, ...props } = this.props
        return (
            <Route {...props} render={props => (this.props.token ? <Component {...props} /> : <Redirect to='/login' />)} />
        )
    }
  }

  export default RequireAuth