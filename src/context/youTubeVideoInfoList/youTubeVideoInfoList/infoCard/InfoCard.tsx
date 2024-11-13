import React from 'react'
import './InfoCard.css'
import Thumbnail from './thumbnail/Thumbnail'
import Author from './author/Author'
import Title from './title/Title'
import DeleteButton from './deleteButton/DeleteButton'

const InfoCard: React.FC = (props) => {
  return (
    <div className='info-card'>
      <div className='left-content'>
        <Thumbnail />
        <div className='author-title-container'>
          <Title />
          <Author />
        </div>
      </div>
      <DeleteButton />
    </div>
  )
}

export default InfoCard
