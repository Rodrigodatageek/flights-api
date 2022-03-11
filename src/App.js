import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import SearchResults from './components/SearchResults';

function App() {

  const url = 'https://api.skypicker.com/flights?fly_from=PRG&fly_to=VLC&partner=data4youcbp202106&limit=5';

  const [flight, setFlight] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const resp = await fetch(url);
    const result = await resp.json();
    console.log(result.data);
    setData(result.data);
  }
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
