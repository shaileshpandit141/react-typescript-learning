import React from 'react'
import './Header.css'
import ListCount from './listCount/ListCount'

const Header: React.FC = (props) => {
  return (
    <div className='header'>
      <span>Video Info List</span>
      <ListCount />
    </div>
  )
}

export default Header
