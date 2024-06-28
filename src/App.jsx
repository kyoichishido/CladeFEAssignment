import { useState } from 'react'
import Nav from './Components/Nav'
import Navbar from './Components/NavBar'
import Siderbar from './Components/Sidebar'
import JobPreview from './Components/JobPreview'
import Body from './Components/Body'
import TabHeader from './Components/TabHeader'


function App() {

  return (
    <>
    <Navbar />
    <TabHeader />
    <Body />
    </>
  )
}

export default App


// App - BG - width
// Nav - 3 divs
    // Logo - 3 Links - Notif&avatar
// Body component
    // Header component
    // Container div flex - 70/30%
        // Right div (70%) - Heading, SubSec links, bodyPoints, Footer
        // Left div - buttons links 


