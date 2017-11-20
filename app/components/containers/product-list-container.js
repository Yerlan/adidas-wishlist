import React from 'react';
import { connect } from 'react-redux';
import ProductList from '../views/product-list';
import * as productApi from '../../api/product-api';
import store from '../../store';
import { loadSearchLayout } from '../../actions/search-layout-actions';
import { browserHistory } from 'react-router'

//Product list container, logic goes here
const ProductListContainer = React.createClass({

  componentDidMount: function () {
    productApi.getAllProducts();
    store.dispatch(loadSearchLayout('products', 'Products Results'));
  },

  render: function () {

    return (
      <ProductList products={this.props.products} addToWishlist={function (prod) {
        //Call API to Add to wishlist
        productApi.addToWishlist(prod);
      }
      } deleteFromWishlist={
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

export default connect(mapStateToProps)(ProductListContainer);
