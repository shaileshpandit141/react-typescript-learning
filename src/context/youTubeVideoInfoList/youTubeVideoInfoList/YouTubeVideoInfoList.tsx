import React from 'react'
import './YouTubeVideoInfoList.css'
import Header from '../components/header/Header'
import InfoCard from '../components/infoCard/infoCard/InfoCard'
import AddInfoForm from '../components/addInfoForm/addInfoForm/AddInfoForm'

const YouTubeVideoInfoList: React.FC = (props) => {
  return (
    <div className='youtube-video-info-list'>
      <Header />
      <main className='info-cards'>
        <InfoCard />
        <InfoCard />
      </main>
      <AddInfoForm />
    </div>
  )
}

export default YouTubeVideoInfoList
