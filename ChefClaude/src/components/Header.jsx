import React from 'react'
import chef from '../assets/chef.png'

const Header = () => {
  return (
    <header className="bg-white m-2 h-24 text-center text-gray-800 flex items-center justify-center rounded-b-sm rounded-t-md shadow-sm font-normal text-2xl">
      <img className='w-12' src={chef} />
      <h1>Chef Claude</h1>
    </header>
  )
}

export default Header
