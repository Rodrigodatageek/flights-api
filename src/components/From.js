import { useState } from "react";

function From({setFrom}) {

    const fromDestination = ["Prague", "Berlin", "Warsaw", "Pardubice"];
    

    return (
        
        <select
        onChange={(e) => setFrom(e.target.value)}>
            {fromDestination.map((from, i) => (
                <option key={i} value={from}>{from}</option>
            ))}
            
        </select>
    )
}

export default From;