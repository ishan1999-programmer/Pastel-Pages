import React from "react";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Keyboard, Grid } from "swiper/modules";
import AuthorCard from "./AuthorCard";

export default function GenreDisplay({ currentGenre}) {
  let topPicksArray = currentGenre.genreTopPicks.map((val) => (
    <SwiperSlide>
      <BookCard
        bookCover={val.bookCover}
        title={val.title}
        writer={val.writer}
        genre={val.genre}
        rating={val.rating}
      />
    </SwiperSlide>
  ));

  let topAuthorsArray = currentGenre.genreTopAuthors.map((val) => (
    <SwiperSlide>
      <AuthorCard
        authorCover={val.authorCover}
        authorName={val.authorName}
        authorDescription={val.authorDescription}
      />
    </SwiperSlide>
  ));
  return (
    <div className="genre-page">
      <div className="genre-discription-section">
        <div
          className="genre-discription-content"
          style={{ backgroundColor: `${currentGenre.genreColor}` }}
        >
          <p className="genre-heading">{currentGenre.genreHeading}</p>
          <p className="genre-discription">{currentGenre.genreDiscription}</p>
        </div>
      </div>
      <div className="genre-top-picks-section">
        <div className="genre-top-picks-content">
          <p className="genre-top-picks-heading">
            {currentGenre.genreTopPicksHeading}
          </p>
          <Swiper
            modules={[Navigation, Keyboard]}
            loop={true}
            keyboard={true}
            slidesPerView={"1"}
            navigation={true}
            grabCursor={true}
            breakpoints={{
              1400: { slidesPerView: 5 },
              1230: { slidesPerView: 4.5 },
              1100: { slidesPerView: 4 },
              970: { slidesPerView: 3.5 },
              840: { slidesPerView: 3 },
              710: { slidesPerView: 2.5 },
              580: { slidesPerView: 2 },
              440: { slidesPerView: 1.5 },
            }}
          >
            {topPicksArray}
          </Swiper>
        </div>
      </div>
      <div className="genre-top-authors-section">
        <div className="genre-top-authors-content">
          <p className="genre-top-authors-heading">
            Meet the Minds Behind the Stories
          </p>
          <Swiper
            keyboard={true}
            grabCursor={true}
            modules={[Navigation]}
            navigation={true}
            loop={true}
            slidesPerView={1}
            breakpoints={{
              1300: { slidesPerView: 4 },
              1150: { slidesPerView: 3.5 },
              1000: { slidesPerView: 3 },
              890: { slidesPerView: 2.7 },
              795: { slidesPerView: 2.4 },
              705: { slidesPerView: 2.1 },
              610: { slidesPerView: 1.8 },
              550: { slidesPerView: 1.6 },
              490: { slidesPerView: 1.4 },
              420: { slidesPerView: 1.2 },
            }}
          >
            {topAuthorsArray}
          </Swiper>
        </div>
      </div>
      <div className="genre-quotes-section">
        <div className="genre-quotes-content">
          <p className="genre-quotes-heading">
            Notable Lines from the Genre...
          </p>
          <div className="genre-quotes-grid">
            <div className="genre-quotes">
              <p className="genre-quote">{currentGenre.genreQuotes[0].quote}</p>
              <p className="genre-quote-writer">
                {`- ${currentGenre.genreQuotes[0].quoteWriter}`}
              </p>
            </div>
            <div className="genre-quotes">
              <p className="genre-quote">{currentGenre.genreQuotes[1].quote}</p>
              <p className="genre-quote-writer">
                {`- ${currentGenre.genreQuotes[1].quoteWriter}`}
              </p>
            </div>
            <div className="genre-quotes">
              <p className="genre-quote">{currentGenre.genreQuotes[2].quote}</p>
              <p className="genre-quote-writer">
                {`- ${currentGenre.genreQuotes[2].quoteWriter}`}
              </p>
            </div>
            <div className="genre-quotes">
              <p className="genre-quote">{currentGenre.genreQuotes[3].quote}</p>
              <p className="genre-quote-writer">
                {`- ${currentGenre.genreQuotes[3].quoteWriter}`}
              </p>
            </div>
            <div className="genre-quotes">
              <p className="genre-quote">{currentGenre.genreQuotes[4].quote}</p>
              <p className="genre-quote-writer">
                {`- ${currentGenre.genreQuotes[4].quoteWriter}`}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="genre-did-you-know-section">
        <div className="genre-did-you-know-content">
          <p className="genre-did-you-know-heading">Did you know ?</p>
          <p className="genre-did-you-know">{currentGenre.genreDidYouKnow}</p>
        </div>
      </div>
    </div>
  );
}
