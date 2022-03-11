import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SearchContainer from './components/SearchContainer';

function App() {

 

  
  return (
    <div className="App">
      <h1>Hi</h1>
      <SearchContainer />

     {/* <Router>
        <Header />

        <Routes>
           <Route></Route>
           <Route></Route>
           <Route></Route>
        </Routes>

      </Router> */}

      
   
    </div>
  );
};


export default App;
