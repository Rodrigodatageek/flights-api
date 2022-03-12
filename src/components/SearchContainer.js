import From from "./From";
import To from "./To";
import { useEffect, useState } from 'react';
import Message from "./Message";


function SearchContainer({setData, setInitial}) {

    const [from, setFrom] = useState("");
    const [to, setTo] = useState("");
    const [direct, setDirect] = useState(false);

    console.log(from);
    console.log(to);

    const url = `https://api.skypicker.com/flights?fly_from=${from}&fly_to=${to}&direct_flights=${direct}&partner=data4youcbp202106&limit=5`;

    const [flight, setFlight] = useState([]);
    const [noInput, setNoInput] = useState(false);

    // useEffect(() => {
    //   fetchData();
    // }, []);
  
    const fetchData = async () => {
      const resp = await fetch(url);
      const result = await resp.json();
      console.log(result);

      result && !!result.data.length && setFlight(result.data);
      result && !!result.data.length && setData(result.data);
      setInitial(false);
    }

    const destinationCheck = () => {
        
            if(from && to) {
                setNoInput(false);
                fetchData()
             } else {
                 console.log(noInput)
                setNoInput(true);
             }
        
            
    }

    return (
        <section className="search-cont">
            <From setFrom={setFrom}/>
            <To setTo={setTo} />
            <div className="checkbox">
                <label>Check for direct flights only</label>
                <input type="checkbox" checked={direct} onChange = {(e) => setDirect(e.target.checked)} />
            </div>
            <button onClick = {destinationCheck}>Search</button>
            {noInput && <Message />}
        
        </section>
    )
}

export default SearchContainer;
