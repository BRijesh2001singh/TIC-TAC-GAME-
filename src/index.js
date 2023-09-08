import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div style={{
      height: "100vh",
      width: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "black"
    }}>
      <App />
    </div>
  </React.StrictMode>,
)
