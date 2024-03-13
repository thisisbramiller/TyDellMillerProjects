import logo from './assets/logo.png'
import viteLogo from '../public/vite.svg'
import reactLogo from './assets/react.svg'
import typescriptLogo from './assets/typescript.svg'
import './App.css'

function App() {
  return (
    <>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="react logo" />
        </header>
      </div>
      <br/>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.typescriptlang.org/" target="_blank">
          <img src={typescriptLogo} className="logo typescript" alt="Typescript logo" />
        </a>
      </div>
      <h1>Built with Vite + React + Typescript</h1>
    </>
  )
}

export default App
