import React from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import Paraphraser from './components/Paraphraser'
import './App.css'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigate to='/tool' replace />} />
      <Route path='/tool' element={<Paraphraser />} />
    </Routes>
  )
}

export default App
