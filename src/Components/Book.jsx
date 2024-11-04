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
  handleRemove
}) => {
  let isAdded = cartItems.some((val) => val.id === id);

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
        type="button"
        className={
          isAdded ? "add-to-cart-button item-added" : "add-to-cart-button "
        }
        onClick={() => {
          if (!isAdded) {
            setCartItems((cartItems) => [
              ...cartItems,
              {
                id: id,
                title: title,
                writer: writer,
                bookCover: bookCover,
                discountedPrice: discountedPrice,
                quantity:1
              },
            ])
          }
          else {
            handleRemove(id);
          }
        }
        }
      >
        {!isAdded && <img src="cart.svg" alt="" />}
        <p>{isAdded ? "Added to Cart" : "Add to Cart"}</p>
      </button>
    </div>
  );
};

export default Book;
