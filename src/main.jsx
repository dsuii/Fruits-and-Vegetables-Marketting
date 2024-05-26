import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {RouterProvider,createBrowserRouter} from "react-router-dom"
import ProductPage from './components/ProductPage.jsx'

const router=createBrowserRouter([
  {
    path:"/",
    element:<App/>
  },
  {
    path:"/products",
    element:<ProductPage/>
  }
])
 
ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router}/>
)