import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './main.scss';
import App from './components/App/App';
import Topbar from './components/Topbar/Topbar';
import Product from './components/Product/Product';
import * as serviceWorker from './serviceWorker';

// Redirects to list if doesn't match any route.
const Home = () => <Redirect to={{ pathname: '/list' }} />;

ReactDOM.render(
  <Router>
    <>
      <Topbar />
      <Switch>
        <Route exact path="/list" component={App} />
        <Route path="/list/:product" component={Product} />
        <Route component={Home} />
      </Switch>
    </>
  </Router>,
  document.getElementById('root'),
);

serviceWorker.register();
