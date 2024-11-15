import React, { useState } from "react";
import CartItem from "./CartItem";
import { Link } from "react-router-dom";

const Cart = ({
  cartItems,
  handleRemove,
  changeQuantity,
  cartSize,
}) => {
  let [promoCodeText, setPromoCodeText] = useState("");
  let [promoCodeDiscount, setPromoCodeDiscount] = useState(0);
  let [promoCodeMessage, setPromoCodeMessage] = useState({
    isValid: true,
    display: "none",
  });

  function handlePromoCode(promocode) {
    if (promocode === "BOOKLOVER50") {
      setPromoCodeDiscount(50);
      setPromoCodeMessage({ isValid: true, display: "block" });
    } else if (promocode === "PAGEFLIP100") {
      setPromoCodeDiscount(100);
      setPromoCodeMessage({ isValid: true, display: "block" });
    } else if (promocode === "NOVEL200") {
      setPromoCodeDiscount(200);
      setPromoCodeMessage({ isValid: true, display: "block" });
    } else if (promocode === "READMORE150") {
      setPromoCodeDiscount(150);
      setPromoCodeMessage({ isValid: true, display: "block" });
    } else if (promocode === "BOOKWORM75") {
      setPromoCodeDiscount(75);
      setPromoCodeMessage({ isValid: true, display: "block" });
    } else {
      setPromoCodeDiscount(0);
      setPromoCodeMessage({ isValid: false, display: "block" });
    }
    setTimeout(
      () => setPromoCodeMessage({ isValid: true, display: "none" }),
      3000
    );
  }
  if (cartSize) {
    let subtotal = 0;
    cartItems.forEach(
      (val) =>
        (subtotal = subtotal + Number(val.quantity * val.discountedPrice))
    );
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
                  {cartItems.map((val) => (
                    <CartItem
                      handleRemove={handleRemove}
                      key={val.id}
                      id={val.id}
                      title={val.title}
                      writer={val.writer}
                      bookCover={val.bookCover}
                      discountedPrice={val.discountedPrice}
                      quantity={val.quantity}
                      changeQuantity={changeQuantity}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className="cart-content-box-right">
              <div className="cart-content-box-right-up">
                <div className="summary">Summary</div>
                <div className="subtotal-box">
                  <div className="subtotal">
                    <p>Subtotal:</p>
                    <p>&#8377;{subtotal}</p>
                  </div>
                  <div className="delivery-charge">
                    <p>Delivery:</p>
                    <p>&#8377;100</p>
                  </div>
                  <div
                    className={
                      promoCodeDiscount ? "discount promo" : "discount"
                    }
                  >
                    <p>Discount:</p>
                    <p>&#8377;{promoCodeDiscount}</p>
                  </div>
                </div>
                <div className="final-amount-box">
                  <p className="final-amount">Total:</p>
                  <div className="final-amount-box-right">
                    <p className={promoCodeDiscount ? "total promo" : "total"}>
                      &#8377;{subtotal + 100}
                    </p>
                    <p
                      className={
                        promoCodeDiscount
                          ? "total-with-discount promo"
                          : "total-with-discount"
                      }
                    >
                      &#8377;{subtotal + 100 - promoCodeDiscount}
                    </p>
                  </div>
                </div>
                <button type="button" className="pay-button">
                  Proceed to Pay
                </button>
              </div>
              <div className="cart-content-box-right-down">
                <div className="promo-code-heading">Have a Promo Code ?</div>
                <div className="promo-code-input">
                  <input
                    type="text"
                    placeholder="Promo Code"
                    value={promoCodeText}
                    onChange={(e) => setPromoCodeText(e.target.value)}
                  />
                  <button
                    type="button"
                    onClick={() => handlePromoCode(promoCodeText)}
                  >
                    Apply
                  </button>
                </div>
                <div
                  className="promo-code-message"
                  style={{
                    display: `${promoCodeMessage.display}`,
                    backgroundColor: `${
                      promoCodeMessage.isValid ? "#54BAB9" : "#E5707E"
                    }`,
                  }}
                >
                  {promoCodeMessage.isValid
                    ? "Promo code applied successfully!"
                    : "Invalid Promo Code"}
                </div>
                <div className="promo-code-list">
                  <p className="promo-code-list-heading">
                    Availabel Promo Codes:
                  </p>
                  <div
                    className="promo-code"
                    onClick={() => setPromoCodeText("BOOKLOVER50")}
                  >
                    BOOKLOVER50 - ₹50 Off
                  </div>
                  <div
                    className="promo-code"
                    onClick={() => setPromoCodeText("PAGEFLIP100")}
                  >
                    PAGEFLIP100 - ₹100 Off
                  </div>
                  <div
                    className="promo-code"
                    onClick={() => setPromoCodeText("NOVEL200")}
                  >
                    NOVEL200 - ₹200 Off
                  </div>
                  <div
                    className="promo-code"
                    onClick={() => setPromoCodeText("READMORE150")}
                  >
                    READMORE150 - ₹150 Off
                  </div>
                  <div
                    className="promo-code"
                    onClick={() => setPromoCodeText("BOOKWORM75")}
                  >
                    BOOKWORM75 - ₹75 Off
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="cart-empty-page">
        <div className="cart-empty-page-content">
          <h1 className="cart-empty-page-heading">Your Cart is Empty</h1>
          <p className="cart-empty-page-text1">
            Oh no! It looks like you haven't added any books yet.
          </p>
          <p className="cart-empty-page-text2">
            Explore our collection and fill your cart with cozy reads!
          </p>
          <Link to="/" className="shop-books-link">
            <img src="cart.svg" alt="" />
            <p>Shop Books</p>
          </Link>
        </div>
      </div>
    );
  }
};

export default Cart;
