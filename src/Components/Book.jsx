import React, { useState } from "react";

const Book = ({
  id,
  title,
  writer,
  bookCover,
  originalPrice,
  discountedPrice,
  setCartItems,
  cartItems,
}) => {
  console.log(cartItems);
  
  return (
    <div className="book-card">
      <div className="book-image-box">
        <img
          src={bookCover ? bookCover : "no-image.jpg"}
          alt=""
          className="book-image"
        />
      </div>
      <div className="book-info">
        <p className="book-title">{title}</p>
        <p className="book-writer">{writer}</p>
      </div>
      <div className="book-price">
        <p className="book-price-original"> &#8377;{originalPrice}</p>
        <p className="book-price-current">&#8377;{discountedPrice}</p>
      </div>
      <button
        disabled={cartItems.some((val) => val.id === id)}
        type="button"
        className="add-to-cart-button"
        onClick={() =>
          setCartItems((cartItems) => [
            ...cartItems,
            {
              id: id,
              title: title,
              writer: writer,
              bookCover: bookCover,
              discountedPrice: discountedPrice,
              totalPrice: discountedPrice
            },
          ])
        }
      >
        {!cartItems.some((val) => val.id === id) ? (
          <div className="add-to-cart-box">
            <img src="cart.svg" alt="" />
            <p>Add to cart</p>
          </div>
        ) : (
          <div className="added-to-cart-box">Item Added</div>
        )}
      </button>
    </div>
  );
};

export default Book;
