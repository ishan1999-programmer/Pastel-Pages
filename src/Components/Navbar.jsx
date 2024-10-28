import { useRef, useState } from "react";
import {Link} from "react-router-dom"

export default function Navbar({setGenre , searchValue , setSearchValue}) {
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
      <Link className="navbar-logo" to="/" onClick={() => setGenre("")}>
        <img src="./public/logo.svg" id="logo" />
        <h1>Pastel Pages</h1>
      </Link>
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
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
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
        <Link to="/cart" onClick={() => setGenre("")}>
          <img src="./public/cart.svg" alt="" />
        </Link>
        <Link to="/createAccount" onClick={() => setGenre("")}>
          <img src="./public/user.svg" alt="" />
        </Link>
      </div>
    </div>
  );
}
