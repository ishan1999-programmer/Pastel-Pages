import React, { useState } from 'react'
import { Link, redirect } from "react-router-dom";


const SmallScreenMenu = ({isMenuOpen , setGenre , setIsMenuOpen}) => {
    let [isGenresSmallScreenOpen, setIsGenresSmallScreenOpen] = useState(false);

    let className = isMenuOpen
      ? "small-screen-menu menu-open"
      : "small-screen-menu";
  return (
    <div className={className}>
      <Link to="/" className="home-small-screen" onClick={()=>setIsMenuOpen(false)}>
        Home
      </Link>
      <Link to="/cart" className="cart-small-screen" onClick={()=>setIsMenuOpen(false)}>
        Cart
      </Link>
      <div className="genres-small-screen">
        <p onClick={() => setIsGenresSmallScreenOpen(!isGenresSmallScreenOpen)}>
          Genre
        </p>
        <div
          className="genres-small-screen-box"
          style={{ display: `${isGenresSmallScreenOpen ? "flex" : "none"}` }}
        >
          <Link
            to="/genre"
            className="small-screen-genre-link"
            onClick={() => {
              setIsMenuOpen(false);
              setGenre("fantasy")}}
          >
            Fantasy
          </Link>
          <Link
            to="/genre"
            className="small-screen-genre-link"
            onClick={() => {
              setIsMenuOpen(false);
              setGenre("horror")}}
          >
            Horror
          </Link>
          <Link
            to="/genre"
            className="small-screen-genre-link"
            onClick={() => {
              setIsMenuOpen(false);
              setGenre("mystery")}}
          >
            Mystery
          </Link>
          <Link
            to="/genre"
            className="small-screen-genre-link"
            onClick={() => {
              setIsMenuOpen(false);
              setGenre("romance")}}
          >
            Romance
          </Link>
          <Link
            to="/genre"
            className="small-screen-genre-link"
            onClick={() => {
              setIsMenuOpen(false);
              setGenre("scifi")}}
          >
            Sci-fi
          </Link>
          <Link
            to="/genre"
            className="small-screen-genre-link"
            onClick={() => {
              setIsMenuOpen(false);
              setGenre("thriller")}}
          >
            Thriller
          </Link>
        </div>
      </div>
      <Link to="/createAccount" className="create-account-small-screen" onClick={()=>setIsMenuOpen(false)}>
        Create Account
      </Link>
      <Link to="/about" className="about-small-screen" onClick={()=>setIsMenuOpen(false)}>
        About
      </Link>
    </div>
  );
}

export default SmallScreenMenu
