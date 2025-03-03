import React from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'

const App = () => {
  return (
    <div className='bg-gray-100 h-screen overflow-auto'>
      <Header />
      <MainContent />
    </div>
  )
}

export default App
