import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { TOS, PrivacyPolicy } from './TOS.tsx';
const router = createBrowserRouter([
  {
    path: "/",
    element:  <App />,
  },
  {
    path: "/terms-of-service",
    element:  <TOS />,
  },
  {
    path: "/privacy-policy",
    element:  <PrivacyPolicy />,
  },
]);
ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
