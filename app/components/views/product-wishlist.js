import React from 'react';
import { replace } from 'lodash';
import { Link } from 'react-router';

// Using "Stateless Functional Components"
export default function (props) {

  return (

    <div className="items">

      {props.products.map(product => {

        function wishlistButton() {
          //Put button with delete action
          return <button className="wishlist-btn active" onClick={props.deleteFromWishlist.bind(this, product.id, true)}>Remove from wishlist</button>
        }

        //Draw rating stars
        function rating() {

          let stars = [];

          for (let i = 0; i < product.rating; i++) {
            stars.push(<div key={i} className="star yellow">&#9733;</div>)
          }

          return stars;

        }

        //Draw price
        function price() {

          let priceObject = JSON.parse(product.separatedSalePrice);
          let constructedPrice = [];

          priceObject.forEach(price => {
            constructedPrice.push(price.value)
          });

          return constructedPrice;

        }

        const prodItem = <div key={product.id} className="product-item">
          <div className="product-inner-wrap">
            <div className="row">
              <div className="product-img-wrap">
                <div className="product-img">
                  <img src={replace(product.image, "sw=60&sh=60", "sw=300&sh=300")}
                    alt="" />
                </div>
              </div>
              <div className="product-description-wrap">
                <span className="category">{product.subTitle}</span>
                <span className="suggestion">{product.suggestion}</span>
                {rating()}
                <div style={{ clear: "both" }}></div>
                <a href={product.url} className="reviews">Read all {product.reviews} reviews</a>

                <div className="footwrap">
                  <div className="pricetag">
                    {price()}
                  </div>
                  {wishlistButton()}
                </div>
              </div>
            </div>
          </div>
        </div>

        return (

          prodItem

        );

      })}

    </div>

  );
}
