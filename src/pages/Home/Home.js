import React, { useState } from 'react'
import Navbar from '../../component/Navbar/Navbar'
import About from '../../component/About/About'
const Home = () => {
  const [navigationBar,setNavigationBar] = useState(false)
  return (
    <div className='home_page'>
      <Navbar setNavigationBar={setNavigationBar} navigationBar={navigationBar}/>
      <About navigationBar={navigationBar}/>
    </div>
  )
}

export default Home