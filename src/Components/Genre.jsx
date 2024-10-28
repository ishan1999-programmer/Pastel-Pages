import React, { useState } from 'react'
import GenreDisplay from './GenreDisplay';

const Genre = ({genre}) => {
  return (
    <GenreDisplay genre={genre} />
  )
}

export default Genre
