import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './Router/Router.jsx'
import { HelmetProvider } from 'react-helmet-async'
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'



const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>  
    <HelmetProvider>
     <div className='   '> 
     <RouterProvider router={router}></RouterProvider>
     </div>
    </HelmetProvider>

    </QueryClientProvider>


  </React.StrictMode>,
)
