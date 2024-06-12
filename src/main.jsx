import React, { Suspense, lazy } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import LazyLoading from './components/loading'

const App = lazy(() => import('./App.jsx'))

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <Suspense fallback={<LazyLoading />}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Suspense>
  // </React.StrictMode>,
)
