
import ReactDOM from 'react-dom/client'
import './index.css'

import {

  RouterProvider,
} from "react-router-dom";
import { router } from './Routers/Routers';

import { HelmetProvider } from 'react-helmet-async';
import AuthProvider from './Provider/AuthProvider';


ReactDOM.createRoot(document.getElementById('root')).render(

  <AuthProvider>
    <HelmetProvider>
      <div className="max-w-screen-lg mx-auto">
        <RouterProvider router={router} />
      </div>
    </HelmetProvider>
  </AuthProvider>

)
