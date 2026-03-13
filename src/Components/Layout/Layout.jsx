import React from 'react'
import Navbar from './Navbar'
import Banner from '../Modals/Banner'

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Banner/>
      {children}
    </>
  )
}

export default Layout