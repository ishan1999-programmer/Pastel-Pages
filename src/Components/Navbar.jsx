import { useRef, useState } from "react";

export default function Navbar() {
  let [searchBarOpen, setSearchBarOpen] = useState(false);
  let [genreDropdownOpen, setGenreDropdownOpen] = useState(false);
  let inputRef = useRef(null);

  function handleClick() {
    if (!searchBarOpen) {
      setSearchBarOpen(true);
      inputRef.current.focus();
    } else {
      setSearchBarOpen(false);
    }
  }

  return (
    <div className="navbar">
      <a className="navbar-logo" href="">
        <img src="./public/logo.svg" id="logo" />
        <h1>Pastel Pages</h1>
      </a>
      <div className="navbar-content">
        <div className="search">
          <img
            src="./public/search.svg"
            alt=""
            className={
              searchBarOpen ? "search-icon search-icon-open" : "search-icon"
            }
            onClick={handleClick}
          />
          <input
            type="text"
            className={
              searchBarOpen ? "search-bar search-bar-open" : "search-bar"
            }
            onBlur={() => setSearchBarOpen(false)}
            placeholder="Search for books..."
            ref={inputRef}
          />
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
              <li>Crime</li>
              <li>Fantasy</li>
              <li>Fiction</li>
              <li>Horror</li>
              <li>Mystery</li>
              <li>Romance</li>
              <li>Science Fiction</li>
              <li>Self Help</li>
              <li>Suspense</li>
              <li>Thriller</li>
            </ul>
          </div>
        </div>
        <div>About</div>
        <div>
          <img src="./public/cart.svg" alt="" />
        </div>
        <div>
          <img src="./public/user.svg" alt="" />
        </div>
      </div>
    </div>
  );
}
