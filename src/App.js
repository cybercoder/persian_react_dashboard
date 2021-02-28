import React from "react";
import { Route, Redirect, BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "./redux/reducers";

import Layout from "./Layout";

import Dashboard from "./pages/dashboard";
import Users from "./pages/users";

// eslint-disable-next-line react/display-name
export default () => {
  return (
    <Provider store={createStore(reducers, applyMiddleware(thunk))}>
      <BrowserRouter>
        <Layout>
          <Route exact path="/" component={Dashboard} />
          <Route path="/users" component={Users} />
        </Layout>
      </BrowserRouter>
    </Provider>
  );
};
