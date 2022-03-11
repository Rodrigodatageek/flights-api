import From from "./From";
import To from "./To";
import { useEffect, useState } from 'react';


function SearchContainer({setData}) {

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");

    console.log(from);
    console.log(to);

    const url = `https://api.skypicker.com/flights?fly_from=${from}&fly_to=${to}&partner=data4youcbp202106&limit=5`;

    const [flight, setFlight] = useState([]);

    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    const fetchData = async () => {
      const resp = await fetch(url);
      const result = await resp.json();
      console.log(result);

      result && !!result.data.length && setFlight(result.data);
      result && !!result.data.length && setData(result.data);
    }

    return (
        <section className="search-cont">
            <From setFrom={setFrom}/>
            <To setTo={setTo} />
            <button onClick = {fetchData}>Search</button>
        
        </section>
    )
}

export default SearchContainer;
