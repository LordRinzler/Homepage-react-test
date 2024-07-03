import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home';
import Aboutme from './Pages/Aboutme';
import Contact from './Pages/Contact';
import App from './App.js';




ReactDOM.createRoot(document.getElementById("root")).render(
  
 <App />
);

reportWebVitals();
