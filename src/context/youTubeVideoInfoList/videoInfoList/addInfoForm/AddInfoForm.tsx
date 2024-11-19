import React, { useState } from 'react'
import './AddInfoForm.css'
import arrowUpward from '../../assets/icons/arrow_upward.svg'
import { useVideoInfoListContext } from '../../feature/videoInfoListContext'

const AddInfoForm: React.FC = (props) => {
  const { add } = useVideoInfoListContext()
  const [url, setUrl] = useState('')

  const handleUrlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUrl(() => event.target.value)
  }

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    add(url)
    setUrl('')
  }

  return (
    <form
      className='add-info-form'
      onSubmit={handleFormSubmit}
    >
      <input
        type='url'
        placeholder='Add a video url'
        required
        className='url-input'
        value={url}
        onChange={handleUrlChange}
      />
      <button className='add-button'>
        <img src={arrowUpward} alt='arrow-upward' />
      </button>
    </form>
  )
}

export default AddInfoForm
