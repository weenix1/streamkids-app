import React from 'react'
import './App.css'
import LandingPage from './components/LandingPage'
import Layout from './components/Layout'

function App() {


  return (
    <Layout>
      <LandingPage />
      {/* <div className="min-h-screen flex justify-center items-center">
        <h1 className="text-3xl font-bold text-blue-600">
          Install & Setup Vite + React + Typescript + Tailwind CSS 3
        </h1>
      </div> */}
    </Layout>
  )
}

export default App
