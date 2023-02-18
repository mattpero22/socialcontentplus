import React, { useState } from 'react';
import './App.css';

// components
import Nav from './components/Nav';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  // define states
  const [page, setPage] = useState("landing") // passed into Main comp to set the page of website

  return (
    <div id='app'>
      <Nav></Nav>
      <Main page={page} setPage={setPage}></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
