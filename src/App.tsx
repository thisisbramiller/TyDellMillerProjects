import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import NavBarHeader from './ui-components/NavBarHeader'
import '@aws-amplify/ui-react/styles.css'
import HomePage from './pages/HomePage'


function App() {
  return (
    <BrowserRouter>
        <NavBarHeader width="100%" />
      <Routes>
      </Routes>
    </BrowserRouter>
  )
}

export default App
