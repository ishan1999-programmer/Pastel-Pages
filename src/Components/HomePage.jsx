import React from "react";
import { useEffect, useRef, useState } from "react";
import { Link, redirect } from "react-router-dom";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, FreeMode, Autoplay } from "swiper/modules";
import "swiper/css/bundle";

const HomePage = ({ setSearchValue, setGenre}) => {
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
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            speed={"4000"}
            grabCursor={true}
            loop={true}
            autoplay={{ delay: 0 }}
            navigation={true}
            freeMode={true}
            slidesPerView={"1"}
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
                rating="4.6 ⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="and-then-there-were-none.jpg"
                title="And Then There Were None"
                writer="Agatha Christie"
                genre="Thriller"
                rating="4.3 ⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="angels-and-demons.jpg"
                title="Angels and Demons"
                writer="Dan Brown"
                genre="Mystery"
                rating="4.4 ⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="atomic-habits.jpg"
                title="Atomic Habits"
                writer="James Clear"
                genre="Self-Help"
                rating="4.5 ⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="1984.jpg"
                title="1984"
                writer="George Orwel"
                genre="Sci-fi"
                rating="4.7 ⭐️"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="recommendation-section">
        <div className="recommendation-content">
          <h1>Recommended For You</h1>
          <Swiper
            modules={[FreeMode, Pagination, Navigation, Autoplay]}
            speed={"4000"}
            loop={true}
            autoplay={{ delay: 0 }}
            navigation={true}
            freeMode={true}
            grabCursor={true}
            slidesPerView={"1"}
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
                rating="4.6 ⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="rock-paper-scissors.jpg"
                title="Rock Paper Scissors"
                writer="Alice Feeney"
                genre="Mystery"
                rating="4.8 ⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="three-body-problem.jpg"
                title="The Three Body Problem"
                writer="Cixin Liu"
                genre="Sci-fi"
                rating="4.4 ⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="housemaid.jpg"
                title="The Housemaid"
                writer="Freida McFadden"
                genre="Thriller"
                rating="4.5 ⭐️"
              />
            </SwiperSlide>
            <SwiperSlide>
              <BookCard
                bookCover="i-let-you-go.jpg"
                title="I let You Go"
                writer="Clare Mackintosh"
                genre="Mystery"
                rating="4.7 ⭐️"
              />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="explore-genres-section">
        <div className="explore-genres-content">
          <h1>Genres to Suit Every Mood</h1>
          <div className="explore-genres-grid">
            <Link
              to="/genre"
              onClick={() => setGenre("fantasy")}
              className="genres-homepage fantasy"
            >
              <p>Fantasy 🏰</p>
              <p>Step into realms of wonder and magic.</p>
            </Link>
            <Link
              to="/genre"
              onClick={() => setGenre("horror")}
              className="genres-homepage horror"
            >
              <p>Horror 👻</p>
              <p>Face the chills that linger beyond the shadows.</p>
            </Link>
            <Link
              to="/genre"
              onClick={() => setGenre("mystery")}
              className="genres-homepage mystery"
            >
              <p>Mystery 🔎</p>
              <p>Unlock secrets hidden in plain sight.</p>
            </Link>
            <Link
              to="/genre"
              onClick={() => setGenre("romance")}
              className="genres-homepage romance"
            >
              <p>Romance 💖</p>
              <p>Discover tales of hearts entwined.</p>
            </Link>
            <Link
              to="/genre"
              onClick={() => setGenre("scifi")}
              className="genres-homepage scifi"
            >
              <p>Sci-fi 👽</p>
              <p>Explore worlds beyond the stars.</p>
            </Link>
            <Link
              to="/genre"
              onClick={() => setGenre("thriller")}
              className="genres-homepage thriller"
            >
              <p>Thriller ⏰</p>
              <p>Brace yourself for a heart-pounding journey.</p>
            </Link>
          </div>
        </div>
      </div>
      <div className="quotes-section">
        <div className="quotes-content">
          <h1>Quotes That Inspire...</h1>
          <div className="quotes-grid">
            <div className="quotes">
              <p className="quote">
                "A room without books is like a body without a soul."
              </p>
              <p className="quote-writer">- Marcus Tullius Cicero</p>
            </div>
            <div className="quotes">
              <p className="quote">"Books are a uniquely portable magic."</p>
              <p className="quote-writer">- Stephen King</p>
            </div>
            <div className="quotes">
              <p className="quote">"So many books, so little time."</p>
              <p className="quote-writer">- Frank Zappa</p>
            </div>
            <div className="quotes">
              <p className="quote">
                "Reading is a discount ticket to everywhere."
              </p>
              <p className="quote-writer">- Mary Schmich</p>
            </div>
            <div className="quotes">
              <p className="quote">
                "If you only read the books that everyone else is reading, you
                can only think what everyone else is thinking."
              </p>
              <p className="quote-writer">- Haruki Murakami</p>
            </div>
            <div className="quotes">
              <p className="quote">"There is no friend as loyal as a book."</p>
              <p className="quote-writer">- Ernest Hemingway</p>
            </div>
            <div className="quotes">
              <p className="quote">"A good book is an event in my life."</p>
              <p className="quote-writer">- Stendhal</p>
            </div>
            <div className="quotes">
              <p className="quote">"Books were my pass to personal freedom."</p>
              <p className="quote-writer">- Oprah Winfrey</p>
            </div>
            <div className="quotes">
              <p className="quote">
                "A book is a dream that you hold in your hand."
              </p>
              <p className="quote-writer">- Neil Gaiman</p>
            </div>
            <div className="quotes">
              <p className="quote">
                "You can never get a cup of tea large enough or a book long
                enough to suit me."
              </p>
              <p className="quote-writer">- C.S. Lewis</p>
            </div>
          </div>
        </div>
      </div>
      <div className="newsletter-section">
        <div className="newsletter-content">
          <h1>Stay in the Loop with Bookish News!</h1>
          <p>
            Sign up to get book recommendations, reading tips, and cozy vibes
            delivered to your inbox!
          </p>
          <div className="newsletter-form">
            <input
              type="email"
              placeholder="Enter your email"
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-section">
        <div className="footer-content">
          <div className="footer-top">
            <div className="footer-logo">
              <img src="logo.svg" alt="" />
              <p>Pastel Pages</p>
              <p>A cozy corner for book lovers</p>
            </div>
            <div className="footer-quick-links">
              <p>Quick Links</p>
              <div>
                <Link to="/">Home</Link>
                <a href="">Best Sellers</a>
                <a href="">Recommendations</a>
                <a href="">Genres</a>
                <Link to="/about">Contact</Link>
              </div>
            </div>
            <div className="footer-social">
              <p>Stay Connected</p>
              <div className="social-links">
                <a href="">
                  <img src="facebook-logo.svg" alt="" />
                </a>
                <a href="">
                  <img src="instagram-logo.svg" alt="" />
                </a>
                <a href="">
                  <img src="x-logo.svg" alt="" />
                </a>
              </div>
            </div>
            <div className="footer-newsletter">
              <p>Subscribe to our Newsletter</p>
              <div>
                <input type="email" placeholder="Enter your email" />
                <button type="button">Subscribe</button>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>
              <a href="">Privacy Policy</a> | <a href="">Terms of Service</a>
            </p>
            <p>&copy; 2024 - Present Pastel Pages. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
