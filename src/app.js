import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {BrowserRouter, Link, Route, Switch, NavLink} from 'react-router-dom';

const ExpenseDashboardPage = () => (
  <div>This is the dashboard page</div>
)

const AddExpensePage = () => (
  <div>This is the add expense page</div>
)

const EditPage = () => (
  <div>This is the edit page</div>
)

const HelpPage = () => (
  <div>This is the help page</div>
)

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

const NotFound = () => (
  <div>This is Not Found <br /> Go to <Link to="/">Go Home</Link> Page</div>
)

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true}/>
        <Route path="/create" component={AddExpensePage} exact={true}/>
        <Route path="/edit" component={EditPage} exact={true}/>
        <Route path="/help" component={HelpPage} exact={true}/>
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
