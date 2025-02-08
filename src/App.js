// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import SearchPage from './pages/SearchPage';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/NavBar' 

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
    <div id='page-body'></div>
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/about' element={<AboutPage/>} />
      <Route path='/search' element={<SearchPage/>} />
      <Route path='/error' element={<NotFoundPage/>} />
{/* todo make blog pages */}
    </Routes>
      
    </div>
    </BrowserRouter>

  );
}  

export default App;
