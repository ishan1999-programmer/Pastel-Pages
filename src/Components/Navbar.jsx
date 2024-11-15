import { useEffect, useRef, useState } from "react";
import { Link, redirect } from "react-router-dom";

export default function Navbar({ setGenre, setSearchValue,cartSize , isMenuOpen , setIsMenuOpen }) {
  let [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  let [inputValue, setInputValue] = useState(() => {
    let storedInputValue = localStorage.getItem("inputValue");
    return storedInputValue ? storedInputValue : "";
  });

  useEffect(() => {
    localStorage.setItem("inputValue", inputValue);
  }, [inputValue]);

  return (
    <div className="navbar">
      <Link className="navbar-logo" to="/" onClick={() => {
        setIsMenuOpen(false);
        setGenre("")
      }}>
        <img src="/logo.svg" id="logo" />
        <h1>Pastel Pages</h1>
      </Link>
      <div className="navbar-content">
        <div className="navbar-content-big-screen">
          <Link to="/" className="home">Home</Link>
          <div
            className="genre-box"
            onMouseEnter={() => setGenreDropdownOpen(true)}
            onMouseLeave={() => setGenreDropdownOpen(false)}
          >
            <p>Genres</p>
            <div
              className={
                genreDropdownOpen
                  ? "genre-dropdown genre-dropdown-open"
                  : "genre-dropdown"
              }
            >
              <ul className="genres">
                <li>
                  <Link to="/genre" onClick={() => setGenre("fantasy")}>
                    Fantasy
                  </Link>
                </li>
                <li>
                  <Link to="/genre" onClick={() => setGenre("horror")}>
                    Horror
                  </Link>
                </li>
                <li>
                  <Link to="/genre" onClick={() => setGenre("mystery")}>
                    Mystery
                  </Link>
                </li>
                <li>
                  <Link to="/genre" onClick={() => setGenre("romance")}>
                    Romance
                  </Link>
                </li>
                <li>
                  <Link to="/genre" onClick={() => setGenre("scifi")}>
                    Science Fiction
                  </Link>
                </li>
                <li>
                  <Link to="/genre" onClick={() => setGenre("thriller")}>
                    Thriller
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <Link to="/about" onClick={() => setGenre("")}>
            About
          </Link>
          <Link className="cart-box" to="/cart" onClick={() => setGenre("")}>
            <div className="cart-circle" style={{ opacity: `${cartSize ? 1 : 0}`}}>{ cartSize}</div>
            <img src="/cart.svg" alt="" />
          </Link>
          <Link to="/createAccount" onClick={() => setGenre("")}>
            <img src="/user.svg" alt="" />
          </Link>
        </div>
        <div className="navbar-content-small-screen" onClick={()=>setIsMenuOpen(!isMenuOpen)}>
          <img src="menu.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
