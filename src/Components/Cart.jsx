import React from "react";
import CartItem from "./CartItem";

const Cart = () => {
  return (
    <div className="cart">
      <div className="cart-content">
        <h1>Shopping Bag</h1>
        <div className="cart-content-box">
          <div className="cart-content-box-left">
            <div className="cart-content-box-left-inner">
              <div className="cart-content-box-left-inner-up">
                <div className="cart-content-box-left-inner-up-left">
                  Product
                </div>
                <div className="cart-content-box-left-inner-up-right">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Total Price</p>
                </div>
              </div>
              <div className="cart-content-box-left-inner-down">
                <CartItem />
              </div>
            </div>
          </div>
          <div className="cart-content-box-right">
            <div className="cart-content-box-right-up">
              <div className="summary">Summary</div>
              <div className="subtotal-box">
                <div className="subtotal">
                  <p>Subtotal:</p>
                  <p>&#8377;700</p>
                </div>
                <div className="delivery-charge">
                  <p>Delivery:</p>
                  <p>&#8377;100</p>
                </div>
              </div>
              <div className="final-amount-box">
                <p className="final-amount">Total:</p>
                <p>&#8377;800</p>
              </div>
              <button type="button" className="pay-button">
                Proceed to Pay
              </button>
            </div>
            <div className="cart-content-box-right-down">
              <div className="promo-code">Have a Promo Code ?</div>
              <div className="promo-code-input">
                <input type="text" placeholder="Promo Code" />
                <button type="button">Apply</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
