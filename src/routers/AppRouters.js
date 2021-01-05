import React from "react";
import { Router, BrowserRouter, Route, Switch, useHistory } from "react-router-dom";
import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFound";
import LoginPage  from "../components/LoginPage";
import {createBrowserHistory} from 'history';
import PrivateRoute from "./PrivateRoute";

export const history = createBrowserHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true} />
        <PrivateRoute path="/create" component={AddExpensePage} exact={true} />
        <PrivateRoute path="/edit/:id" component={EditPage} />
        <PrivateRoute path="/help" component={HelpPage} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
