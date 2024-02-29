import React from 'react'
import ReactDOM from 'react-dom/client'
import Posts from './routes/Posts'
import NewPost from './routes/NewPost/NewPost'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import RootLayout from './routes/RootLayout'
// all the routes
const router = createBrowserRouter([
    {path: '/', 
      element: <RootLayout/>, 
      children: [
        {path:'/', element: <Posts />, children: [
          {path: 'create-post', element: <NewPost />}
        ]}, // main route
        {path:'/create-post', element: <NewPost/>},
      ]
    }
]);


// Injection point - into the root div
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
    {/* <App /> */}
  </React.StrictMode>
)
