import axios from 'axios';
import store from '../store';
import { getProductsSuccess, getWishlistSuccess, addToWishlistSuccess, deleteFromWishlistSuccess, deleteFromWishlistAndHideSuccess } from '../actions/product-actions';
import { filter, includes } from 'lodash';

//Get all products
export function getAllProducts() {
  return axios.get('https://www.adidas.co.uk/api/suggestions/Stans%20Smith')
    .then(response => {

      //Get all items in wishlist
      return Promise.all([
        axios.get('http://127.0.0.1:3001/wishlist'),
      ]).then(results => {

        //Check if items in wishlist
        response.data.products.forEach((origProduct, i) => {

          origProduct.inWishlist = false;
          origProduct.id = i + 1;

          results[0].data.forEach((prodInWishlist) => {

            if (prodInWishlist.id == origProduct.id) {
              //Item is in wishlist, mark it
              origProduct.inWishlist = true;
            }

          });


        });

        //Dispatch state
        store.dispatch(getProductsSuccess(response.data.products));

        return;

      });

    });
}

//Search product
export function searchProducts(query = '') {
  return axios.get('https://www.adidas.co.uk/api/suggestions/Stans%20Smith')
    .then(response => {

      return Promise.all([
        axios.get('http://127.0.0.1:3001/wishlist'),
      ]).then(results => {

        response.data.products.forEach((p, i) => {
          p.id = i + 1;
        });

        response.data.products = filter(response.data.products, (p) => {
          return includes(p.suggestion.toLowerCase(), query.toLowerCase());
        })

        response.data.products.forEach((origProduct) => {

          origProduct.inWishlist = false;

          results[0].data.forEach((prodInWishlist) => {

            if (prodInWishlist.id == origProduct.id) {
              origProduct.inWishlist = true;
            }

          });

        });

        store.dispatch(getProductsSuccess(response.data.products));

        return;

      });

    });
}

//Search product in wishlist
export function searchProductsInWishlist(query = '') {
  return axios.get('http://127.0.0.1:3001/wishlist')
    .then(response => {

      response.data.forEach((p, i) => {
        p.id = i + 1;
      });

      response.data = filter(response.data, (p) => {
        return includes(p.suggestion.toLowerCase(), query.toLowerCase());
      })

      store.dispatch(getProductsSuccess(response.data));

      return response;

    });
}

//Get whole wishlist
export function getWishlist() {
  return axios.get('http://127.0.0.1:3001/wishlist')
    .then(response => {
      store.dispatch(getWishlistSuccess(response.data));
      return response;
    });
}

//Add to wishlist
export function addToWishlist(productObject = '') {

  return axios.post('http://127.0.0.1:3001/wishlist', productObject)
    .then(response => {
      store.dispatch(addToWishlistSuccess(productObject));
      return response;
    });
}

//Delete from wishlist
export function deleteFromWishList(productID = '', hide = false) {
  return axios.delete('http://127.0.0.1:3001/wishlist/' + productID)
    .then(response => {
      if (hide) {
        store.dispatch(deleteFromWishlistAndHideSuccess(productID));
      } else {
        store.dispatch(deleteFromWishlistSuccess(productID));
      }
      return response;
    });
}