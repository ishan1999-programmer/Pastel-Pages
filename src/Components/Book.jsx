import React, { useState } from 'react'

const Book = ({ title, bookCover,id,writer}) => {
  const { op, dp } = generatePrices(id);
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
        <p className="book-price-original"> &#8377;{op}</p>
        <p className="book-price-current">&#8377;{dp}</p>
      </div>
      <button type="button" className="add-to-cart-button">
        <img src="cart.svg" alt="" />
        <p>Add to cart</p>
      </button>
    </div>
  );
}

const generatePrices = (bookId) => {
  const basePrice = 500 + (parseInt(bookId, 36) % 501); 
  const discount = Math.floor(basePrice * 0.2);
  const discountedPrice = basePrice - discount;

  return {
    op: String(basePrice),
    dp: String(discountedPrice)
  };
};

export default Book
