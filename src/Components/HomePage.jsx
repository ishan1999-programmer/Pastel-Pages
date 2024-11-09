import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, redirect } from "react-router-dom";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const HomePage = ({ setSearchValue,setGenre }) => {
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
      <div className="bestsellers-section">
        <div className="bestsellers-content">
          <h1>Our Bestsellers</h1>
          <Swiper
            modules={[FreeMode, Pagination, Navigation]}
            navigation={true}
            freeMode={true}
            slidesPerView={"1.2"}
            breakpoints={{
              1350: {
                slidesPerView: 5,
              },
              1150: {
                slidesPerView: 4.3,
              },
              950: {
                slidesPerView: 3.6,
              },
              830: {
                slidesPerView: 3.1,
              },
              730: {
                slidesPerView: 2.7,
              },
              620: {
                slidesPerView: 2.3,
              },
              565: {
                slidesPerView: 2.1,
              },
              435: {
                slidesPerView: 1.6,
              },
              360: {
                slidesPerView: 1.3,
              },
            }}
          >
            <SwiperSlide>
              <BookCard
                bookCover="alchemist.jpg"
                title="The Alchemist"
                writer="Paulo Coelho"
                genre="Self-Help"
                rating="4.6⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="and-then-there-were-none.jpg"
                title="And Then There Were None"
                writer="Agatha Christie"
                genre="Thriller"
                rating="4.3⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="angels-and-demons.jpg"
                title="Angels and Demons"
                writer="Dan Brown"
                genre="Mystery"
                rating="4.4⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="atomic-habits.jpg"
                title="Atomic Habits"
                writer="James Clear"
                genre="Self-Help"
                rating="4.5⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="1984.jpg"
                title="1984"
                writer="George Orwel"
                genre="Sci-fi"
                rating="4.7⭐️"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="recommendation-section">
        <div className="recommendation-content">
          <h1>Recommended For You</h1>
          <Swiper
            modules={[FreeMode, Pagination, Navigation]}
            navigation={true}
            freeMode={true}
            slidesPerView={"1.2"}
            breakpoints={{
              1350: {
                slidesPerView: 5,
              },
              1150: {
                slidesPerView: 4.3,
              },
              950: {
                slidesPerView: 3.6,
              },
              830: {
                slidesPerView: 3.1,
              },
              730: {
                slidesPerView: 2.7,
              },
              620: {
                slidesPerView: 2.3,
              },
              565: {
                slidesPerView: 2.1,
              },
              435: {
                slidesPerView: 1.6,
              },
              360: {
                slidesPerView: 1.3,
              },
            }}
          >
            <SwiperSlide>
              <BookCard
                bookCover="silent-patient.jpg"
                title="The Silent Patient"
                writer="Alex Michaelides"
                genre="Mystery"
                rating="4.6⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="rock-paper-scissors.jpg"
                title="Rock Paper Scissors"
                writer="Alice Feeney"
                genre="Mystery"
                rating="4.8⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="three-body-problem.jpg"
                title="The Three Body Problem"
                writer="Cixin Liu"
                genre="Sci-fi"
                rating="4.4⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="housemaid.jpg"
                title="The Housemaid"
                writer="Freida McFadden"
                genre="Thriller"
                rating="4.5⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="i-let-you-go.jpg"
                title="I let You Go"
                writer="Clare Mackintosh"
                genre="Mystery"
                rating="4.7⭐️"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="explore-genres-section">
        <div className="explore-genres-content">
          <h1>Genres to Suit Every Mood</h1>
          <div className="explore-genres-grid">
            <Link to = "/genre" onClick={()=>setGenre("fantasy")} className="genres-homepage fantasy">
              <p>Fantasy 🏰</p>
              <p>Step into realms of wonder and magic.</p>
            </Link>
            <Link to = "/genre" onClick={()=>setGenre("horror")} className="genres-homepage horror">
              <p>Horror 👻</p>
              <p>Face the chills that linger beyond the shadows.</p>
            </Link>
            <Link to = "/genre" onClick={()=>setGenre("mystery")} className="genres-homepage mystery">
              <p>Mystery 🔎</p>
              <p>Unlock secrets hidden in plain sight.</p>
            </Link>
            <Link to = "/genre" onClick={()=>setGenre("romance")} className="genres-homepage romance">
              <p>Romance 💖</p>
              <p>Discover tales of hearts entwined.</p>
            </Link>
            <Link to = "/genre" onClick={()=>setGenre("scifi")} className="genres-homepage scifi">
              <p>Sci-fi 👽</p>
              <p>Explore worlds beyond the stars.</p>
            </Link>
            <Link to = "/genre" onClick={()=>setGenre("thriller")} className="genres-homepage thriller">
              <p>Thriller ⏰</p>
              <p>Brace yourself for a heart-pounding journey.</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
