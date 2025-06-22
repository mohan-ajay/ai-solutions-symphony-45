import { createRoot } from 'react-dom/client'
import  ReactDOM  from 'react-dom/client';
import App from './App.tsx'
import './index.css'
import React from 'react'
import './MetricDustVisualizer/styles.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  ) 
