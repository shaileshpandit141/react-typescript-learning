import React from 'react'
import './YouTubeVideoInfoList.css'
import Header from './header/Header'
import InfoCard from './infoCard/InfoCard'
import AddInfoForm from './addInfoForm/AddInfoForm'

const YouTubeVideoInfoList: React.FC = (props) => {
  return (
    <div className='youtube-video-info-list'>
      <div className='sc-add-info-form'>
        <AddInfoForm />
      </div>
      <Header />
      <main className='info-cards'>
        <InfoCard />
        <InfoCard />
        <InfoCard />
      </main>
      <div className='lc-add-info-form'>
        <AddInfoForm />
      </div>
    </div>
  )
}

export default YouTubeVideoInfoList
