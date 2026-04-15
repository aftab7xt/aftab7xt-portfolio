import React from 'react'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <h1 className="text-4xl font-bold text-white">
        Shaikh Aftab <span className="text-blue-500">Alli</span>
      </h1>
      <Analytics />
    </div>
  )
}

export default App

