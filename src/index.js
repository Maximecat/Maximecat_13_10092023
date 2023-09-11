import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import './index.css';
import App from './pages/Home/App';
import SignIn from './pages/SignIn/SignIn';
import Profil from './pages/Profil/Profil';

const root = ReactDOM.createRoot(document.getElementById('root'));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/login",
    element: <SignIn />
  },
  {
    path: "/profil",
    element: <Profil />
  }
])

root.render(
  <React.StrictMode>
    <>
      <RouterProvider router={router} />
    </>
  </React.StrictMode>
);