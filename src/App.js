import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';
import SearchContainer from './components/SearchContainer';

function App() {

const [data, setData] = useState([]);

console.log(data);

  
  return (
    <div className="App">
      <h1>Selelect departure flight</h1>
      <SearchContainer setData={setData}/>
      <SearchResults data={data}/>
     

      
   
    </div>
  );
};


export default App;
