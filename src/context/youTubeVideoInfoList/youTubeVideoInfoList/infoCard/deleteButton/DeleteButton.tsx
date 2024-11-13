import React from 'react'
import './DeleteButton.css'
import deleteIcon from '../../../assets/icons/delete.svg'

const DeleteButton: React.FC = (props) => {
  return (
    <button className='delete-button'>
      <img src={deleteIcon} alt='arrow-upward' />
    </button>
  )
}

export default DeleteButton
