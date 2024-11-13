import React from 'react'
import './AddButton.css'
import arrowUpward from '../../../assets/icons/arrow_upward.svg'

const AddButton: React.FC = (props) => {
  return (
    <button className='add-button'>
      <img src={arrowUpward} alt='arrow-upward' />
    </button>
  )
}

export default AddButton
