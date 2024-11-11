import React from 'react'

export default function GenreDisplay({ currentGenre }) { 
  return (
    <div className='genre-page'>
      <div className="genre-content">
        <div className="genre-discription-box" style={{backgroundColor: `${currentGenre.genreColor}`}}>
          <p className='genre-heading'>{currentGenre.genreHeading}</p>
          <p className="genre-discription">{ currentGenre.genreDiscription}</p>
        </div>
        <div className="genre-top-picks">
          <p className="genre-top-picks-heading">{ currentGenre.genreTopPicksHeading}</p>
        </div>
      </div>
    </div>
  )
}

