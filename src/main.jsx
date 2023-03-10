import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Home from './components/Home'
import './index.css'
import './components/Home.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Home />
  </React.StrictMode>,
)
