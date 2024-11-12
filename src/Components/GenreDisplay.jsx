import React from "react";
import BookCard from "./BookCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import { Navigation, Keyboard } from "swiper/modules";

export default function GenreDisplay({ currentGenre }) {
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
            centeredSlides={true}
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
    </div>
  );
}
