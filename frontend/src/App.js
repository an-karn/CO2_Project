import React from 'react'
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Level from './components/Level';
import Weather from './components/Weather';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  return (
    <Router>
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
        <Route path="/" element = {<Home/>} />
            <Route path="/level" element={<Level />} />
            <Route path="/weather" element={<Weather />} />
        </Routes>
        <Footer />
      </header>
    </div>
    </Router>
  );
}

export default App;
