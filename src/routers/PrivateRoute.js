import React from 'react';
import { connect } from 'react-redux';
import { Redirect, Route } from 'react-router-dom';
import Header from '../components/Header';

const PrivateRoute = ({
  isAuthenticated, 
  component: Component,
  ...rest
}) => {
  console.log(rest);
  return (
  <Route {...rest} component={(props) => (
    isAuthenticated ? (
      <div>
        <Header />
        <Component {...props}/>
      </div>
    ) : (
      <Redirect to="/"/>
    )
  )}/>
)};

// const PrivateRoute = (props) => {
//   return (
//   <Route {...props}/>
// )};

const mapStateToProps = (state) => ({
  isAuthenticated: !!state.auth.uid,
});

export default connect(mapStateToProps)(PrivateRoute);