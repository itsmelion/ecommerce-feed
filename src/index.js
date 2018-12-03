import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';

import './main.scss';
import List from './components/List/List';
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
        <Route exact path="/list" component={List} />
        <Route path="/list/:product" component={Product} />
        <Route component={Home} /> {/* acts like a 404 not found */}
      </Switch>
    </>
  </Router>,
  document.getElementById('root'),
);

serviceWorker.register();
