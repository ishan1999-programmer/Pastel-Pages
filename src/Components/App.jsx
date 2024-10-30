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

  let router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar setGenre={setGenre} setSearchValue={setSearchValue} />
          <HomePage />
        </>
      ),
    },
    {
      path: "/search",
      element: (
        <>
          <Navbar setGenre={setGenre} setSearchValue={setSearchValue} />
          <SearchPage searchValue={searchValue} />
        </>
      ),
    },
    {
      path: "/genre",
      element: (
        <>
          <Navbar setGenre={setGenre} setSearchValue={setSearchValue} />
          <Genre genre={genre} />
        </>
      ),
    },
    {
      path: "/about",
      element: (
        <>
          <Navbar setGenre={setGenre} setSearchValue={setSearchValue} />
          <About />
        </>
      ),
    },
    {
      path: "/cart",
      element: (
        <>
          <Navbar setGenre={setGenre} setSearchValue={setSearchValue} />
          <Cart />
        </>
      ),
    },
    {
      path: "/createAccount",
      element: (
        <>
          <Navbar setGenre={setGenre} setSearchValue={setSearchValue} />
          <CreateAccount />
        </>
      ),
    },
  ]);
  return <RouterProvider router={router} />;
}
