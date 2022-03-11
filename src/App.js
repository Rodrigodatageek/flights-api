import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';
import SearchContainer from './components/SearchContainer';

function App() {

const [data, setData] = useState([]);
const [initial, setInitial] = useState(true)

console.log(data);

  
  return (
    <div className="App">
      <h2>Select departure and arrival destination</h2>
      <SearchContainer setInitial={setInitial} setData={setData}/>
      { !initial && <SearchResults data={data}/>}
     

      
   
    </div>
  );
};


export default App;
