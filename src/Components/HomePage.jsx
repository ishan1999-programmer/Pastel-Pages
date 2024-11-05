import React from 'react'
import { useEffect, useRef, useState } from "react";
import { Link, redirect } from "react-router-dom";


const HomePage = ({ setSearchValue }) => {
  let [inputValue, setInputValue] = useState("");
  return (
    <div className="homepage">
        <div className="hero-section">
          <div className="hero-section-content">
            <h1>Explore, Imagine, and Unwind...</h1>
            <p>
              Welcome to a world of stories! Whether you crave magical fantasy,
              intriguing mysteries, spine-tingling horror, heart-pounding
              thrillers, heartwarming romance, or thrilling sci-fi adventures, we
              have a book for every reader. Dive in and let the journey begin!
            </p>
            <div className="searchbar-box">
              <input
                type="search"
                placeholder="Search for your next favorite book…"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
              />
              <Link
                to={inputValue ? "/search" : "/"}
                className="search"
                onClick={() => setSearchValue(inputValue)}
              >
                Search
              </Link>
            </div>
          </div>
        </div>
      
    </div>
  );
};

export default HomePage