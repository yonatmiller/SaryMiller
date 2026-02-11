import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './main.css'
// import Header from './cmps/Header.jsx'
import App from './cmps/App.jsx'
// import Footer from './cmps/Footer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <Header /> */}
    <App />
    {/* <Footer /> */}
  </StrictMode>,
)
