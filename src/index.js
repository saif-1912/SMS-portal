import React from 'react'
import ReactDOM from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import { RouterProvider } from 'react-router-dom';
import router from './Route';


// console.log(ReactDOM)

const createroot = ReactDOM.createRoot(document.getElementById('root'))
console.log(createroot)

createroot.render(
  <RouterProvider router={router} />
)