import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';

function App() {

 

  
  return (
    <div className="App">
     <Router>
        {/* <Header /> */}
        
        <Routes>
        {/* <SearchResults data={data}/> */}
        <Route path="/result" element={<SearchResults data={data}/>} />
        </Routes>

           {/* <Route></Route>
           <Route></Route> */}

      </Router>

      
   
    </div>
  );
};


export default App;
