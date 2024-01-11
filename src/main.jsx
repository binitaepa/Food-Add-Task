import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Layout/Home/Home';
import AddItem from './AddItem/AddItem';
import Root from './Layout/Root/Root';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
      },
      {
      path:'/add',
      element:<AddItem></AddItem>
    }]
  },
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className=''>
    <RouterProvider router={router} />
    </div>
  </React.StrictMode>,
)
