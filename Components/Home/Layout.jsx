// import React, { Children } from 'react'
import Footer from './Footer'
import Navbar from './Navgbar'

function Layout({ children }) {
  return (
    <div>
        <Navbar />
        <main>{children}</main>
        <Footer />
    </div>
  )
}

export default Layout
