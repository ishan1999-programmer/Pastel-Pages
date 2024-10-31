import { useRef, useState } from "react";
import { Link, redirect } from "react-router-dom";

export default function Navbar({ setGenre, setSearchValue,cartSize }) {
  let [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  let [inputValue, setInputValue] = useState("");

  return (
    <div className="navbar">
      <Link className="navbar-logo" to="/" onClick={() => setGenre("")}>
        <img src="./public/logo.svg" id="logo" />
        <h1>Pastel Pages</h1>
      </Link>
      <div className="navbar-content">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            placeholder="Search for books..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => {
              if (e.code === "Enter") {
                setSearchValue(inputValue);
              } else {
                return;
              }
            }}
          />
          <Link
            to={inputValue ? "/search" : "/"}
            className="search-icon-box"
            onClick={() => setSearchValue(inputValue)}
          >
            <img src="./public/search.svg" alt="" className="search-icon" />
          </Link>
        </div>
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
                <Link to="/genre" onClick={() => setGenre("selfhelp")}>
                  Self Help
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
          <img src="./public/cart.svg" alt="" />
        </Link>
        <Link to="/createAccount" onClick={() => setGenre("")}>
          <img src="./public/user.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
