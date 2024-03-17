import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import NavBarHeader from './ui-components/NavBarHeader'
import '@aws-amplify/ui-react/styles.css'
import HomePage from './pages/HomePage'
import MarketingFooterBrand from './ui-components/MarketingFooterBrand'


function App() {
  return (
    <BrowserRouter>
      <NavBarHeader width="100%" marginBottom="20px" />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<div>About</div>} />
        <Route path="/services" element={<div>Services</div>} />
        <Route path="/contact" element={<div>Contact</div>} />
        <Route path="/blog" element={<div>Blog</div>} />
      </Routes>
      <MarketingFooterBrand width="100%"  />
    </BrowserRouter>
  )
}

export default App
