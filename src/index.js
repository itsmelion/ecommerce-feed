import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './main.scss';
import App from './components/App/App';
import Topbar from './components/Topbar/Topbar';
import Product from './components/Product/Product';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <>
      <Topbar />
      <Switch>
        <Route exact path="/" component={App} />
        <Route path="/:product" component={Product} />
      </Switch>
    </>
  </BrowserRouter>,
  document.getElementById('root'),
);

serviceWorker.register();
