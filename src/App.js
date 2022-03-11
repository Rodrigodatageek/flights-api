import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

const [data, setData] = useState([]);

console.log(data);

  
  return (
    <div className="App">

      <h1>Hello</h1>
     <Router>
        <Header />
        
        <Routes>
        <SearchResults data={data}/>
        <Route path="/result" element={<SearchResults data={data}/>} />
        </Routes>

           <Route></Route>
           <Route></Route>
      </Router>

      
   
    </div>
  );
};


export default App;
