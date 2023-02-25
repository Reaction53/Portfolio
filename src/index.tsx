import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Cardpage from './pages/Cardpage';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "Cardpage",
    element: <Cardpage></Cardpage>,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
