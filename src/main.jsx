import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'


import Header from "./components/Header/Header"
import Introduction from './components/Introduction/Introduction'
import History from './components/History/History'
import Footer from './components/Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <Introduction/>
    <History />
    <Footer />
  </StrictMode>,
)
