import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

import {BrowserRouter, Route} from 'react-router-dom';

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

const routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
      <Route path="/create" component={AddExpensePage} exact={true}/>
      <Route path="/edit" component={EditPage} exact={true}/>
      <Route path="/help" component={HelpPage} exact={true}/>
    </div>
  </BrowserRouter>
)

ReactDOM.render(routes, document.getElementById('app'))
