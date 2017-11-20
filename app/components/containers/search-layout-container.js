import React from 'react';
import { connect } from 'react-redux';
import SearchLayout from '../layouts/search-layout';

//Search layout container
const mapStateToProps = function (store) {

  let searchType = store.searchLayoutState.searchType;
  let totalResults = 0;

  if (searchType === 'products') {
    totalResults = store.productsState.products.length;
  } else if (searchType === 'products-wishlist') {
    totalResults = store.productsState.products.length;
  }

  return {
    searchType,
    title: store.searchLayoutState.title,
    totalResults
  };

};

export default connect(mapStateToProps)(SearchLayout);
