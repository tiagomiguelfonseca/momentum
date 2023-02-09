import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Logo from "./assets/images/momentum-logo.png"
import SearchAppBar from "./components/SearchAppBar"
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={Logo} className="logo" alt="Vite logo" />
        </a>
        <SearchAppBar />
        {/* <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a> */}
      </div>
      <h1>Momemtum F*** Unbelievable Project</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Place your score {count}
        </button>
      </div>
    </div>
  )
}

export default App
