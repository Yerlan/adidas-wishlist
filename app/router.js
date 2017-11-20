import React from 'react';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';

import MainLayout from './components/layouts/main-layout';
import SearchLayoutContainer from './components/containers/search-layout-container';

import Home from './components/home';
import ProductListContainer from './components/containers/product-list-container';
import ProductWishlistContainer from './components/containers/product-wishlist-container';

//React router
export default (
  <Router history={browserHistory}>
    <Route component={MainLayout}>
      <Route path="/" component={Home} />

      <Route path="products">
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={ProductListContainer} />
        </Route>
      </Route>

      <Route path="wishlist">
        <Route component={SearchLayoutContainer}>
          <IndexRoute component={ProductWishlistContainer} />
        </Route>
      </Route>

    </Route>
  </Router>
);
