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
import { useState } from "react";
import SearchPage from "./SearchPage";

export default function App() {
  let [genre, setGenre] = useState("");
  let [searchValue, setSearchValue] = useState("");
  let [cartItems, setCartItems] = useState([]);
  
  function changeTotalPrice(itemID, quantity) {
    setCartItems(cartItems.map((val) => {
      if (val.id === itemID) {
        return {...val , totalPrice: val.discountedPrice*quantity}
      }
      else {
        return val;
      }
    }))
  }
  let cartSize = cartItems.length;

  function handleRemove(itemID) {
    setCartItems(cartItems.filter((val) => val.id != itemID));
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
          />
          <HomePage />
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
          />
          <SearchPage
            searchValue={searchValue}
            setCartItems={setCartItems}
            cartItems={cartItems}
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
          />
          <Genre genre={genre} />
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
          />
          <About />
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
          />
          <Cart
            cartItems={cartItems}
            setCartItems={setCartItems}
            handleRemove={handleRemove}
            changeTotalPrice = {changeTotalPrice}
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
          />
          <CreateAccount />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
