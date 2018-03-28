import React from 'react';
import { Router, browserHistory } from 'react-router';

import App from './components/app';
import Home from './components/home';

const loadModule = (cb) => {
  return module => cb(null, module.default);
}

const componentRoutes = {
  component: App,
  path: '/',
  indexRoute: { component: Home },
  childRoutes: [
    {
      path: 'shoppingSearchList',
      getComponent(location, cb) {
        System.import('../src/components/shopping/shopping_search_list')
          .then(loadModule(cb));
      }
    },
    {
      path: 'shoppingItem',
      getComponent(location, cb) {
        System.import('../src/components/shopping/shopping_item')
          .then(loadModule(cb));
      }
    },
    {
      path: 'shoppingCart',
      getComponent(location, cb) {
        System.import('../src/components/shopping/shopping_cart')
          .then(loadModule(cb))
      }
    }
  ]
}

const Routes = () => {
  return (
    <Router history={browserHistory} routes={componentRoutes} />
  );
}

export default Routes;