import React from 'react'
import './InfoCard.css'
import Thumbnail from './thumbnail/Thumbnail'
import Author from './author/Author'
import Title from './title/Title'
import DeleteButton from './deleteButton/DeleteButton'

const InfoCard: React.FC = (props) => {
  return (
    <div className='info-card'>
      <figure className='thumbnail-container'>
        <Thumbnail />
      </figure>
      <div className='author-title-container'>
        <Author />
        <Title />
      </div>
      <DeleteButton />
    </div>
  )
}

export default InfoCard
