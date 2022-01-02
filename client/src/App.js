import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Components import
import LandingPage from './Components/LandingPage/LandingPage';
import ProductsPage from './Components/ProductsPage/ProductsPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
        <Route exact path='/products' element={<ProductsPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;