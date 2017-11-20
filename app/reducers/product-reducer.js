import * as types from '../actions/action-types';
import _ from 'lodash';

const initialState = {
  products: [],
};

//Reducer
const productReducer = function (state = initialState, action) {

  switch (action.type) {

    //Update state when getting products
    case types.GET_PRODUCTS_SUCCESS:
      return Object.assign({}, state, { products: action.products });

    //Update state when getting wishlist products
    case types.GET_WISHLIST_SUCCESS:
      return Object.assign({}, state, { products: action.products });

    //Update state when adding a product to wishlist
    case types.ADD_TO_WISHLIST_SUCCESS:
      let newProducts = state.products
      _.find(newProducts, product => product.id == action.product.id).inWishlist = true
      let newWithAdded = newProducts
      return Object.assign({}, state, { products: newWithAdded });

    //Update state when deleting product from a wishlist
    case types.DELETE_FROM_WISHLIST_SUCCESS:
      let newProductsDelete = state.products
      _.find(newProductsDelete, product => product.id == action.product).inWishlist = false
      return Object.assign({}, state, { products: newProductsDelete });

    //Update state when deleting product from a wishlist and hiding it
    case types.DELETE_FROM_WISHLIST_HIDE_SUCCESS:
      let newWishlistItems = _.filter(state.products, product => product.id != action.product)
      return Object.assign({}, state, { products: newWishlistItems });

  }

  return state;

}

export default productReducer;
