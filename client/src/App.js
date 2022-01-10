import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components import
import LandingPage from './Components/LandingPage/LandingPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LandingPage />}></Route>
      </Routes>
    </Router>
  );
}

export default App;