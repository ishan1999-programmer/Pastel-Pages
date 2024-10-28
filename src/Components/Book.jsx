import React from 'react'

const Book = ({ title, bookCover,id}) => {
    const { op, dp } = generatePrices(id);
  return (
    <div class="book-card">
      <div className="book-image-box">
        <img src={bookCover} alt="" className="book-image" />
      </div>
      <p className="book-title">
        {title}
      </p>
      <div className="book-price">
        <p className="book-price-original"> &#8377;799</p>
        <p className="book-price-current">&#8377;538</p>
      </div>
      <div className="book-quantity">
        <button type="button">-</button>
        <p>1</p>
        <button type="button">+</button>
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
