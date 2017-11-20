//Define action with action types to work with in future

import * as types from '../actions/action-types';

export function getProductsSuccess(products) {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    products
  };
}

export function getWishlistSuccess(products) {
  return {
    type: types.GET_WISHLIST_SUCCESS,
    products
  };
}

export function addToWishlistSuccess(product) {
  return {
    type: types.ADD_TO_WISHLIST_SUCCESS,
    product
  };
}

export function deleteFromWishlistSuccess(product) {
  return {
    type: types.DELETE_FROM_WISHLIST_SUCCESS,
    product
  };
}

export function deleteFromWishlistAndHideSuccess(product) {
  return {
    type: types.DELETE_FROM_WISHLIST_HIDE_SUCCESS,
    product
  };
}
