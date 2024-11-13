import React from 'react'
import './AddInfoForm.css'
import UrlInput from './urlInput/UrlInput'
import AddButton from './addButton/AddButton'

const AddInfoForm: React.FC = (props) => {
  return (
    <form className='add-info-form'>
      <UrlInput />
      <AddButton />
    </form>
  )
}

export default AddInfoForm
