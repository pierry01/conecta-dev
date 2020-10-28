import React from 'react'
import './styles.css'

import Header from './components/Header'

const Home = () => {
  return (
    <div>
      <Header />

      <main>
        <div className='navbar'>
          NAVBAR
        </div>

        <div className='feed'>
          FEED
        </div>
      </main>
    </div> 
  )
}

export default Home
