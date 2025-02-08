import React, { useState } from 'react';

import './App.css';
import { BrowserRouter, Routes, Route,  } from 'react-router-dom';
import NavBar from './components/NavBar';
import Login from './components/Login/Login';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import LoginPage from './pages/LoginPage';
// import ProtectedRoute from './ProtectedRoute';

function App() {

  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }

  return (
    <BrowserRouter>
    <div className='App'>
      <div>
      <NavBar/>

      </div>
    <div id='page-body'></div>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      
      <Route path='/search' element={<SearchPage/>} />
      <Route path='/error' element={<NotFoundPage/>} />
      <Route path='/login' element={<LoginPage/>} />

      <Route path='*' element={<NotFoundPage/>} />


{/* todo make blog pages */}
    </Routes>
      
    </div>
    </BrowserRouter> 

  );
}  
 
export default App;
