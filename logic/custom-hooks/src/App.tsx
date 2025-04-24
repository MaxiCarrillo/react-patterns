import './App.css'
import reactLogo from './assets/react.svg'
import { useLocalStorage } from './shared/hooks/useLocalStorage'
import viteLogo from '/vite.svg'

function App() {
  const [count, setCount] = useLocalStorage('count', 0)

  const handleClick = () => {
    const newCount = Number(count) + 1;
    setCount(newCount);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={handleClick}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
