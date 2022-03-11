import { useState } from "react";

function From({setFrom}) {

    const fromDestination = [
        {name: "Prague", code: "PRG"},
        {name: "Berlin", code: "SXF" },
        {name:  "Warsaw", code: "WAW"},
        {name: "Pardubice", code: "PED"}
    ];
    

    return (
        <div className="select">
            <label>Departure from </label>
            <select
            defaultValue={""} 
            onChange={(e) => setFrom(e.target.value)}>
                <option value="" disabled hidden>Select destination</option>
                {fromDestination.map((from, i) => (                
                    <option key={i} value={from.code}>{from.name}</option>
                ))}
                
            </select>
        </div>
    )
}

export default From;