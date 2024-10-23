import { useState } from 'react'
import './App.css'

function App() {
  const [message, setMessage] = useState<string | null>(null)

  const handleClick = async () => {
    const response = await fetch('/api/hello')
    const data = await response.json()
    setMessage(data.message)
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Vite + React + Express</h1>
        <p>
          <button onClick={handleClick}>Click me</button>
        </p>
        {message && <p>{message}</p>}
      </header>
    </div>
  )
}

export default App
