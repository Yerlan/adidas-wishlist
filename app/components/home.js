import React from 'react';
import { Link } from 'react-router';

//Some static content as a starting point
const Home = React.createClass({
  render: function () {
    return (
      <div className="content-wrapper">
        <h1>Adidas Wishlist Coding Challenge</h1>
        <p>
          Thanks for running this Adidas Wishlist Coding Challenge app. This SPA is written using Express, React, React Router, Redux,
    ES2015. JSON-SERVER is chosen as a main data storage for the sake of convenience. Main data is loaded from given Adidas
    API, the wishlist is stored in /data/db.json.
    <br />
          <br />To start browsing, just go to

    <Link to="/products" > All Products</Link>. All your wishlist items will be shown in
    <Link to="/wishlist" > Wishlist</Link>. You can also use search to search for an item.

  </p>
      </div>
    );
  }
}); export default Home;