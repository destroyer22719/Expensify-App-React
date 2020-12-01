import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => (
  <header>
    <h1>Exensify</h1>
    <ul>
      <li><NavLink exact={true} to="/" activeClassName="active" >Home</NavLink></li>
      <li><NavLink exact={true} to="/create" activeClassName="active"> Create</NavLink></li>
      <li><NavLink exact={true} to="/edit" activeClassName="active" >Edit</NavLink></li>
      <li><NavLink exact={true} to="/help" activeClassName="active" >Help</NavLink></li>
    </ul>
  </header>
)

export default Header;