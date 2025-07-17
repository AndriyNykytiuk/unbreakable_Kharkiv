import React from 'react'
import Header from './components/Header'
import Preview from './components/Preview'
 import Footer from './components/Footer'
 import './components/css/mobile.css'
import './App.css'
const App = () => {
  return (
    <>

    <div className='app-background'>
      <Header />
      <Preview />
      <Footer />
    </div>
    
  

    </>
  )
}

export default App