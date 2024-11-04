import React, { useState } from "react";

const CartItem = ({
  id,
  title,
  writer,
  bookCover,
  discountedPrice,
  handleRemove,
  quantity,
  changeQuantity,
}) => {
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <img src={bookCover ? bookCover : "no-image.jpg"} alt="" className="cart-item-image" />

        <div className="cart-item-details-box">
          <p className="title"> {title}</p>
          <p className="writer">{writer}</p>
          <div className="cart-item-quantity">
            <button
              onClick={() => {
                if (quantity > 1) {
                  changeQuantity(id, quantity - 1);
                } else {
                  return;
                }
              }}
            >
              -
            </button>
            <p>{quantity}</p>
            <button onClick={() => changeQuantity(id, quantity + 1)}>+</button>
          </div>
          <button className="remove-button" onClick={() => handleRemove(id)}>
            Remove
          </button>
        </div>
      </div>
      <div className="cart-item-right">
        <p className="price">&#8377;{discountedPrice}</p>
        <p className="quantity">{quantity}</p>
        <p className="total-price">&#8377;{quantity * discountedPrice}</p>
      </div>
    </div>
  );
};

export default CartItem;
