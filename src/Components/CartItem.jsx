import React from "react";

const CartItem = () => {
  return (
    <div className="cart-item">
      <div className="cart-item-left">
        <div className="cart-item-image-box">
          <img src="" alt="" />
        </div>
        <div className="cart-item-details-box">
          <p className="title"> Title</p>
          <p className="writer">Author</p>
          <div className="cart-item-quantity">
            <button>-</button>
            <p>1</p>
            <button>+</button>
          </div>
          <button className="remove-button">Remove</button>
        </div>
      </div>
      <div className="cart-item-right">
        <p className="price">&#8377;999</p>
        <p className="quantity">10</p>
        <p className="total-price">&#8377;9990</p>
      </div>
    </div>
  );
};

export default CartItem;
