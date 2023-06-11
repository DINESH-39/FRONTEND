import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Home from './Components/HomePage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewDetails from './Components/ViewPage';
import EditDetails from './Components/EditPage';
import AddDetails from './Components/Add';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/getdetail/:id' element={<ViewDetails/>}/>
      <Route path='/update/:id' element={<EditDetails/>}/>
      <Route path='/post' element={<AddDetails/>}/>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
