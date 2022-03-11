import React from 'react';
import { Link, useParams } from "react-router-dom";

function To({setTo}) {

  const toDestination = [
    {name: "Valencia", code: "VLC"}, 
    {name: "Barcelona", code: "BSN"},
    {name: "Madrid", code: "MAD"}, 
    {name: "Milano", code: "MXP"}, 
    {name: "Athens", code: "ATH"}
  ];
  

  return (
    <div className="select">
      <label>Arrival to</label>
        <select 
        defaultValue={""}  
        onChange={(e) => setTo(e.target.value)}>
            <option value="" disabled hidden>Select destination</option>
          {toDestination.map((to, i) => (
            <option key={i} value={to.code}>{to.name}</option>
          ))}
            
        </select>
      
    </div>
  )
}

export default To;






