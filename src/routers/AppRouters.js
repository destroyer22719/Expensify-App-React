import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import AddExpensePage from "../components/AddExpensePage";
import EditPage from "../components/EditPage";
import ExpenseDashboardPage from "../components/ExpenseDashboardPage";
import HelpPage from "../components/HelpPage";
import NotFound from "../components/NotFound";
import Header from "../components/Header";
import LoginPage  from "../components/LoginPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={LoginPage} exact={true} />
        <Route path="/dashboard" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} exact={true} />
        <Route path="/edit/:id" component={EditPage} />
        <Route path="/help" component={HelpPage} exact={true} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
