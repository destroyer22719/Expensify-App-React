import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { startLogout } from '../actions/auth';

const Header = ({startLogout}) => (
  <header>
    <h1>Expensify App</h1>
    <ul>
      <li><NavLink exact={true} to="/dashboard" activeClassName="active" >Home</NavLink></li>
      <li><NavLink exact={true} to="/create" activeClassName="active"> Create</NavLink></li>
      <li><NavLink exact={true} to="/help" activeClassName="active" >Help</NavLink></li>
    </ul>
    <button onClick={startLogout}>Logout</button>
  </header>
);

const mapDispatchToProps = dispatch => ({
  startLogout: () => dispatch(startLogout())
});

export default connect(undefined, mapDispatchToProps)(Header);