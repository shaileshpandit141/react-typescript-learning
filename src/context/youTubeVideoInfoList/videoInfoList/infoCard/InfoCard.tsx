import React from 'react'
import './InfoCard.css'
import deleteIcon from '../../assets/icons/delete.svg'
import { useVideoInfoListContext } from '../../feature/videoInfoListContext'

interface InfoCardProps {
  v_title: string
  author: string
  thumbnail_url: string
}

const InfoCard: React.FC<InfoCardProps> = (props) => {
  const { del } = useVideoInfoListContext()

  const deleteVideoInfo = (thumbnail_url: string) => {
    del(thumbnail_url)
  }

  return (
    <div className='info-card'>
      <div className='left-content'>
        <figure className='thumbnail'>
          <img src={props.thumbnail_url} alt='thumbnail_img' />
        </figure>
        <div className='author-title-container'>
          <h3 className='title'>{props.v_title}</h3>
          <p className='author'>@{props.author}</p>
        </div>
      </div>
      <button
        className='delete-button'
        onClick={(event) => deleteVideoInfo(props.thumbnail_url)}
      >
        <img src={deleteIcon} alt='arrow-upward' />
      </button>
    </div>
  )
}

export default InfoCard
