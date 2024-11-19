import React from 'react'
import './VideoInfoList.css'
import Header from './header/Header'
import InfoCard from './infoCard/InfoCard'
import AddInfoForm from './addInfoForm/AddInfoForm'
import { useVideoInfoListContext } from '../feature/videoInfoListContext'

const VideoInfoList: React.FC = (props) => {
  const { videoList } = useVideoInfoListContext()

  return (
    <div className='youtube-video-info-list'>
      <div className='sc-add-info-form'>
        <AddInfoForm />
      </div>
      <Header />
      <main className='info-cards'>
        {
          videoList.map((videoInfo, index) => {
            return (
              <InfoCard
                key={index}
                v_title={videoInfo.title}
                author={videoInfo.author_name}
                thumbnail_url={videoInfo.thumbnail_url}
              />
            )
          })
        }
      </main>
      <div className='lc-add-info-form'>
        <AddInfoForm />
      </div>
    </div>
  )
}

export default VideoInfoList
