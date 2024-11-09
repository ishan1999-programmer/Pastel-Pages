import React from "react";

const BookCard = ({bookCover , writer , title, genre , rating}) => {
    return (
      <div className="book-card-homepage">
            <div className="book-card-image-box"><img src={bookCover} alt="" /></div>
            <div className="book-card-details-box">
                <div>
                    <p className="book-card-title">{title}</p>
                    <p className="book-card-writer">{writer}</p>
                </div>
                <p className="book-card-genre">{genre}</p>
                <p className="book-card-rating">{rating}</p>
            </div>
      </div>
    );
};

export default BookCard;
