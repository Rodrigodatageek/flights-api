import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
<<<<<<< HEAD
=======
import SearchResults from './components/SearchResults';
import SearchContainer from './components/SearchContainer';
>>>>>>> ffd42494fe4429f4686534981f059d05d3a03a38

function App() {

const [data, setData] = useState([]);

console.log(data);

  
  return (
    <div className="App">
      <SearchContainer setData={setData}/>
      <SearchResults data={data}/>
     

      
   
    </div>
  );
};


export default App;
