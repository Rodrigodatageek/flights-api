import React from 'react';
import { Link, useParams } from "react-router-dom";

const To = () => {

  const toDestination = ["Valencia", "Barcelona", "Madrid", "Milano", "Athens"];
  const [to, setTo] = useState("");

  return (
      <div className="search">
        <select onChange={(e) => setTo(e.target.value)}>
          toDestination.map(to, i) => {
            <option key={i} value={to}>{to}</option>
          })
            

        </select>
      
      
      </div>
  )
}

export default To;






