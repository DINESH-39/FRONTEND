import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import ForgotPassword from './Components/ForgotPassword';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Con from './Components/router';
import { BrowserRouter } from 'react-router-dom';
import { Play } from './Components/play';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Con/>
    </BrowserRouter> 
  </React.StrictMode>
);

reportWebVitals();
