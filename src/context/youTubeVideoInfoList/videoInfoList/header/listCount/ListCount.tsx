import React from 'react'
import './ListCount.css'
import { useVideoInfoListContext } from '../../../feature/videoInfoListContext'

const ListCount: React.FC = (props) => {
  const { videoList } = useVideoInfoListContext()
  const count = videoList.length
  return (
    <div className='list-count'>{String(count).padStart(2, '0')}</div>
  )
}

export default ListCount
