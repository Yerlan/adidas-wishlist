import React from 'react';
import { connect } from 'react-redux';
import ProductWishlist from '../views/product-wishlist';
import * as productApi from '../../api/product-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';

//Wishlist container, logic goes here
const ProductWishlistContainer = React.createClass({

  componentDidMount: function () {
    productApi.getWishlist();
    store.dispatch(loadSearchLayout('products-wishlist', 'Wishlist products search results'));
  },

  render: function () {
    return (
      //Define routes to Api to delete from wishlist
      <ProductWishlist products={this.props.products} deleteFromWishlist={productApi.deleteFromWishList} />
    );
    return (
      <ProductList products={this.props.products} deleteFromWishlist={
        function (prod, hide) {
          //Call API to DELETE from wishlist
          productApi.deleteFromWishList(prod, hide);
        }} />
    );
  }

});

const mapStateToProps = function (store) {
  return {
    products: store.productsState.products
  };
};

export default connect(mapStateToProps)(ProductWishlistContainer);
