import React from 'react'
import './App.css'
import YouTubeVideoInfoList from './context/youTubeVideoInfoList'

const App: React.FC = (props) => {
  return (
    <div className='app'>
      <YouTubeVideoInfoList />
    </div>
  )
}

export default App
