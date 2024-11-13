import React from 'react'
import './YouTubeVideoInfoList.css'
import Header from './header/Header'
import InfoCard from './infoCard/InfoCard'
import AddInfoForm from './addInfoForm/AddInfoForm'

const YouTubeVideoInfoList: React.FC = (props) => {
  return (
    <div className='youtube-video-info-list'>
      <Header />
      <main className='info-cards'>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </main>
      <AddInfoForm />
    </div>
  )
}

export default YouTubeVideoInfoList
