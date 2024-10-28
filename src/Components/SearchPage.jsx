import React, { useState, useEffect } from "react";
import Book from "./Book";

const SearchPage = ({ searchValue }) => {
  let [searchedBooks, setSearchedBooks] = useState([]);

  useEffect(() => { search() }, [searchValue]);

  async function search() {
    try {
      let data = await fetch(
        `https://www.googleapis.com/books/v1/volumes?q=${searchValue}&key=AIzaSyCZ4Q5HkhNAMgIBF7fRhrhNxE0pvAgeJPA`
      );
      let jsonData = await data.json();
      setSearchedBooks(
        jsonData.items
          .filter((val) => val.volumeInfo.title.length < 50)
          .map((val) => (
            <Book
              key={val.id}
              id={val.id}
              title={val.volumeInfo.title}
              bookCover={val.volumeInfo.imageLinks.thumbnail}
            />
          ))
      );
      
    } catch (error) {
      console.log(error.message);
    }
  }
  
  return (
    <div className="searchpage">
      {searchedBooks}
    </div>
  );
};

export default SearchPage;


