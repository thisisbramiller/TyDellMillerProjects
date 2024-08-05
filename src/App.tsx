import logo from './assets/logo.png'
import './App.css'
import NavBarHeader from './ui-components/NavBarHeader'
import '@aws-amplify/ui-react/styles.css'
import HomePage from './pages/HomePage'
import MarketingFooterBrand from './ui-components/MarketingFooterBrand'


function App() {
  return (
    <>
      <div>
        <header className="App-header">
          <img src={logo} className="App-logo" alt="tydell miller logo" />
        </header>
      </div>
      <br/>
      <h1>Software | DevSecOps | Technologist | Musician</h1>
    </>
  )
}

export default App
