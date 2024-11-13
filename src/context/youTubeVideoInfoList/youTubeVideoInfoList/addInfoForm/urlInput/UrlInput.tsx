import React from 'react'
import './UrlInput.css'

const UrlInput: React.FC = (props) => {
  return (
    <input
      type='url'
      placeholder='Add a video url'
      required
      className='url-input'
    />
  )
}

export default UrlInput
