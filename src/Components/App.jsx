import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Navbar from "./Navbar";
import HomePage from "./HomePage";
import Genre from "./Genre";
import About from "./About";
import Cart from "./Cart";
import CreateAccount from "./CreateAccount";
import { useEffect, useState } from "react";
import SearchPage from "./SearchPage";
import SmallScreenMenu from "./SmallScreenMenu";

export default function App() {
  let [genre, setGenre] = useState(() => {
    let storedGenre = localStorage.getItem("genre");
    return storedGenre ? storedGenre : "";
  });

  let [searchValue, setSearchValue] = useState(() => {
    let storedSearchValue = localStorage.getItem("searchValue");
    return storedSearchValue ? storedSearchValue : "";
  });

  let [cartItems, setCartItems] = useState(() => {
    let storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  let [isMenuOpen, setIsMenuOpen] = useState(false);

  window.addEventListener("resize", () => {
    if (window.innerWidth > 750) {
      setIsMenuOpen(false);
    }
  });

  useEffect(() => {
    localStorage.setItem("genre", genre);
  }, [genre]);

  useEffect(() => {
    localStorage.setItem("searchValue", searchValue);
  }, [searchValue]);

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  let cartSize = cartItems.length;

  function handleRemove(itemID) {
    setCartItems(cartItems.filter((val) => val.id != itemID));
  }

  function changeQuantity(itemID, newQuantity) {
    setCartItems(
      cartItems.map((val) => {
        if (val.id === itemID) {
          return { ...val, quantity: newQuantity };
        } else {
          return val;
        }
      })
    );
  }

  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            setGenre={setGenre}
            setSearchValue={setSearchValue}
            cartSize={cartSize}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <HomePage
            setSearchValue={setSearchValue}
            setGenre={setGenre}
          />
          <SmallScreenMenu
            isMenuOpen={isMenuOpen}
            setGenre={setGenre}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      ),
    },
    {
      path: "/search",
      element: (
        <>
          <Navbar
            setGenre={setGenre}
            setSearchValue={setSearchValue}
            cartSize={cartSize}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <SearchPage
            searchValue={searchValue}
            setCartItems={setCartItems}
            cartItems={cartItems}
            handleRemove={handleRemove}
          />
          <SmallScreenMenu
            isMenuOpen={isMenuOpen}
            setGenre={setGenre}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      ),
    },
    {
      path: "/genre",
      element: (
        <>
          <Navbar
            setGenre={setGenre}
            setSearchValue={setSearchValue}
            cartSize={cartSize}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Genre
            genre={genre}
          />
          <SmallScreenMenu
            isMenuOpen={isMenuOpen}
            setGenre={setGenre}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar
            setGenre={setGenre}
            setSearchValue={setSearchValue}
            cartSize={cartSize}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <About />
          <SmallScreenMenu
            isMenuOpen={isMenuOpen}
            setGenre={setGenre}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar
            setGenre={setGenre}
            setSearchValue={setSearchValue}
            cartSize={cartSize}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            handleRemove={handleRemove}
            changeQuantity={changeQuantity}
            cartSize={cartSize}
          />
          <SmallScreenMenu
            isMenuOpen={isMenuOpen}
            setGenre={setGenre}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      ),
    },
    {
      path: "/createAccount",
      element: (
        <>
          <Navbar
            setGenre={setGenre}
            setSearchValue={setSearchValue}
            cartSize={cartSize}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
          <CreateAccount
          />
          <SmallScreenMenu
            isMenuOpen={isMenuOpen}
            setGenre={setGenre}
            setIsMenuOpen={setIsMenuOpen}
          />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
