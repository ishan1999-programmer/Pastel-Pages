import React from 'react'

const AuthorCard = ({authorCover , authorName , authorDescription}) => {
  return (
      <div className='author-card'>
          <div className="author-cover"><img src={authorCover} alt="" /></div>
          <p className="author-name">{ authorName}</p>
          <p className='author-description'>{ authorDescription}</p>
    </div>
  )
}

export default AuthorCard
