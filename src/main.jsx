
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
// main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'

import { HashRouter } from 'react-router-dom' // ✅ use HashRouter

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>
)

