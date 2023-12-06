import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const getCount = localStorage.getItem('count');
  const [count, setCount] = useState(getCount)
  
  useEffect(() => {
    window.addEventListener('storage', (event) => {
      setCount(event.newValue)
    });

    if(!getCount) localStorage.setItem('count', 1)    

  }, [])

  const handleAddCount = () => {
    const currentCount = parseInt(localStorage.getItem('count'));
    localStorage.setItem('count', currentCount + 1);
  }

  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1></h1>
      <div className="card">
        <button onClick={() => handleAddCount()}>
          count is {count} 
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
