import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './pages/Home/App';
import SignIn from './pages/SignIn/SignIn';
import Profil from './pages/Profil/Profil';
import { Provider } from 'react-redux';
import { store } from './redux/store'

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
    <Provider store={store}>
      <RouterProvider router={router} />
    </ Provider>
  </React.StrictMode>
);