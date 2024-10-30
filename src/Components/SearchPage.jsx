import React, { useState, useEffect } from "react";
import Book from "./Book";

const SearchPage = ({ searchValue }) => {
  let [searchedBooks, setSearchedBooks] = useState([]);
  let [isLoading, setIsLoading] = useState(true);

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
      console.log(jsonData);
      setSearchedBooks(
        jsonData.items
          .filter((val) => val.volumeInfo.title.length < 50)
          .map((val) => (
            <Book
              key={val.id}
              id={val.id}
              title={val.volumeInfo.title}
              bookCover={("imageLinks" in val.volumeInfo) ? val.volumeInfo.imageLinks.thumbnail : undefined}
              writer = {val.volumeInfo.authors[0]}
            />
          ))
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
        searchedBooks
      )}
    </div>
  );
};

export default SearchPage;

