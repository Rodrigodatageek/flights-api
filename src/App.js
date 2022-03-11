import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {

  const url = 'https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=data4youcbp202106&limit=5';

  const [flight, setFlight] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result);

  }
  return (
    <div className="App">
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
