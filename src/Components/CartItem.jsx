import React, { useState } from "react";

const CartItem = ({ id, title, writer, bookCover, discountedPrice,handleRemove,changeTotalPrice}) => {
  let [cartItemQuantity, setCartItemQuantity] = useState(1);
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="cart-item-image-box">
          <img src={bookCover ? bookCover : "no-image.jpg"} alt="" />
        </div>
        <div className="cart-item-details-box">
          <p className="title"> {title}</p>
          <p className="writer">{writer}</p>
          <div className="cart-item-quantity">
            <button
              onClick={() => {
                if (cartItemQuantity > 1) {
                  changeTotalPrice(id, cartItemQuantity - 1);
                  setCartItemQuantity(cartItemQuantity - 1);
                }
              }}
            >
              -
            </button>
            <p>{cartItemQuantity}</p>
            <button onClick={() => {
              changeTotalPrice(id,cartItemQuantity+1)
              setCartItemQuantity(cartItemQuantity + 1)
            }}>
              +
            </button>
          </div>
          <button className="remove-button" onClick={()=>handleRemove(id)}>Remove</button>
        </div>
      </div>
      <div className="cart-item-right">
        <p className="price">&#8377;{discountedPrice}</p>
        <p className="quantity">{cartItemQuantity}</p>
        <p className="total-price">
          &#8377;{discountedPrice * cartItemQuantity}
        </p>
      </div>
    </div>
  );
};

export default CartItem;
