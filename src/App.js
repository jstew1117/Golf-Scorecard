import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import Scorecard from './components/Scorecard';
import Submit from './components/Submit';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';

function App() {



  return (
    <div>
      <div className="App">
        <header className="App-Header">
          <div><h1>Marietta Country Club</h1></div>
    <Router>
      <div>
        <nav>
          <Link to='/'>Home</Link>
          <br />
          <br />
          <Link to='/Scorecard'>Scorecard</Link>
          <br />
          <br />
        </nav>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Scorecard" element={<Scorecard />} />
        <Route path="/Submit" element={<Submit />} />
      </Routes>

    </Router>
    </header>
    </div>
    
    </div>





  );
};


export default App;
