import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Login from './login.jsx'
import {BrowserRouter, createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Routes} from 'react-router-dom'

const router =  createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Login />}>
      <Route path='/app' element={<App />} />

    </Route>
  )
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <createBrowserRouter>
      <createRoutesFromElements>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/app' element={<App />}/>
      </Routes>
      </createRoutesFromElements>
    </createBrowserRouter> */}
    <RouterProvider router={router} />
  </React.StrictMode>
)
