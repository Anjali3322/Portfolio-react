import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Components/Webpages/Home'
import Layout from './Components/Layout/Layout'

function App() {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
