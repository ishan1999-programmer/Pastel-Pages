import { BrowserRouter, createBrowserRouter, RouterProvider } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "./Home"
import Genre from "./Genre";
import About from "./About";
import Cart from "./Cart";
import CreateAccount from "./CreateAccount";
import { useState } from "react";




export default function App() {
  let [genre, setGenre] = useState("");
  let [searchValue, setSearchValue] = useState("");
  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar setGenre = {setGenre} setSearchValue = {setSearchValue} />
          <Home searchValue = {searchValue} />
        </>
      ),
    },
    {
      path: "/genre",
      element: (
        <>
          <Navbar setGenre = {setGenre} />
          <Genre genre = {genre} />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar setGenre = {setGenre} />
          <About />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar setGenre = {setGenre} />
          <Cart />
        </>
      ),
    },
    {
      path: "/createAccount",
      element: (
        <>
          <Navbar setGenre = {setGenre} />
          <CreateAccount />
        </>
      ),
    },
  ]);
  return (<RouterProvider router={router} />);
}
