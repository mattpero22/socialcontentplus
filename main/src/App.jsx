import React from 'react';
import { Routes, Route } from 'react-router-dom';

//styles
import './App.css';

// components
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // define states

  return (
    <div id='app'>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
