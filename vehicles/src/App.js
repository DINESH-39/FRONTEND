import logo from './logo.svg';
import './App.css';
import ViewDetails from './Components/ViewPage';
import Home from './Components/HomePage';
import { Route, Router, Routes } from 'react-router-dom';

function App() {
  return (
    <>
     <Router>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/getdetails/:id' element={<ViewDetails/>}/>
    </Routes>
   </Router>
    </>
  );
}

export default App;
