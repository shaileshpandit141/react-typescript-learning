import React from 'react'
import VideoInfoListProvider from './feature/videoInfoListContext'
import VideoInfoList from './videoInfoList/VideoInfoList'

const YouTubeVideoInfoList: React.FC = (props) => {
  return (
    <VideoInfoListProvider>
      <VideoInfoList />
    </VideoInfoListProvider>
  )
}

export default YouTubeVideoInfoList
