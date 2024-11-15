import React, { useState, useEffect } from "react";
import Book from "./Book";
import CartItem from "./CartItem";

const SearchPage = ({
  searchValue,
  setCartItems,
  cartItems,
  handleRemove,
}) => {
  let [searchedBooks, setSearchedBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(true);
  console.log(searchedBooks);

  useEffect(() => {
    if (searchValue) {
      search();
    }
  }, [searchValue]);

  async function search() {
    setIsLoading(true);
    try {
      let data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyCZ4Q5HkhNAMgIBF7fRhrhNxE0pvAgeJPA`
      );
      let jsonData = await data.json();
      setSearchedBooks(
        jsonData.items
          .filter((val) => val.volumeInfo.title.length < 50)
          .map((val) => {
            return {
              id: val.id,
              title: val.volumeInfo.title,
              writer: val.volumeInfo.authors[0],
              bookCover:
                "imageLinks" in val.volumeInfo
                  ? val.volumeInfo.imageLinks.thumbnail
                  : undefined,
            };
          })
      );
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="searchpage">
      {isLoading ? (
        <div className="loading-page">
          <div className="loading-page-spinner"></div>
        </div>
      ) : (
        searchedBooks.map((val) => {
          let { op, dp } = generatePrices(val.id);
          return (
            <Book
              key={val.id}
              id={val.id}
              title={val.title}
              bookCover={val.bookCover}
              writer={val.writer}
              originalPrice={op}
              discountedPrice={dp}
              cartItems={cartItems}
              setCartItems={setCartItems}
              handleRemove={handleRemove}
            />
          );
        })
      )}
    </div>
  );
};

export default SearchPage;

let generatePrices = (bookId) => {
  const sanitizedId = bookId.replace(/[^a-zA-Z0-9]/g, "");
  const numericId = Math.abs(parseInt(sanitizedId, 36) || 0);
  const basePrice = 500 + (numericId % 501);
  const discount = Math.floor(basePrice * 0.2);
  const discountedPrice = basePrice - discount;

  return {
    op: String(basePrice),
    dp: String(discountedPrice),
  };
};
