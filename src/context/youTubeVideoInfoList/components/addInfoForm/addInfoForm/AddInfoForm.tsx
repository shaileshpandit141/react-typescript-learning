import React from 'react'
import './AddInfoForm.css'
import UrlInput from '../urlInput/UrlInput'
import AddButton from '../addButton/AddButton'

const AddInfoForm: React.FC = (props) => {
  return (
    <div className='form'>
      <UrlInput />
      <AddButton />
    </div>
  )
}

export default AddInfoForm
