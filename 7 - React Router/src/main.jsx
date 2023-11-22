import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom"; // importam browser router cand lucram cu routes (avem mai multe pagini), ori apelezi aici, ori in App.jsx
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <BrowserRouter> 
          <App />
      </BrowserRouter>
  </React.StrictMode>,
)
