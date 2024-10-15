import './Home.scss'

import Sidebar from '../components/SideBar'
import Tasks from '../components/Tasks'

import React from 'react'

const Home = () => {
  return (
    <div className='home-container'>
      <Sidebar />
      <Tasks />
    </div>
  )
}

export default Home
