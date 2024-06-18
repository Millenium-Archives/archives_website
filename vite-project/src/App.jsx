import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Progress from './pages/Progress'
import About from './pages/About'
import Survey from './pages/Survey'
import Home from './pages/Home'
import { Route, Routes } from "react-router-dom"
import 'survey-core/defaultV2.min.css';

function App() {
  return (
    <>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap" rel="stylesheet"/>
      </head>
      <Navbar/>
      <div className="container">
        <Routes>
          <Route path="/" element = {<Home />} />
          <Route path="/about" element = {<About />} />
          <Route path="/progress" element = {<Progress />} />
          <Route path="/survey" element = {<Survey />} />
        </Routes>
      </div>
    </>
  )
}

export default App
