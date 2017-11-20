import React from 'react';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
// Define base layout with navbar
export default function (props) {
  return (

    <div className="app">
      <div className="header-wrap">
        <div className="head-bgr"></div>
        <div className="logo"></div>
        <div className="top-nav-wrap">
          <ul>
            <li>
              <Link to="/products" activeClassName="active"><span>All Products</span></Link>
            </li>
            <li>
              <Link to="/wishlist" activeClassName="active"><span>Wishlist</span></Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="global-wrapper lifted">

        <main>{props.children}</main>

      </div>
    </div>
  );
}
