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

export default function App() {
  let [genre, setGenre] = useState("");

  let [searchValue, setSearchValue] = useState(() => {
    let storedSearchValue = localStorage.getItem("searchValue");
    return storedSearchValue ? storedSearchValue : "";
  });

  let [cartItems, setCartItems] = useState(() => {
    let storedCartItems = localStorage.getItem("cartItems");
    return storedCartItems ? JSON.parse(storedCartItems) : [];
  });

  useEffect(() => {
    localStorage.setItem("searchValue", searchValue);
  },[searchValue])

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);
  
  let cartSize = cartItems.length;

  function handleRemove(itemID) {
    setCartItems(cartItems.filter((val) => val.id != itemID));
  }

  function changeQuantity(itemID,newQuantity) {
    setCartItems(cartItems.map((val) => {
      if (val.id === itemID) {
        return {...val , quantity: newQuantity}
      }
      else {
        return val;
      }
    }))
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
            handleRemove = {handleRemove}
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
            changeQuantity={changeQuantity}
            cartSize = {cartSize}
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
