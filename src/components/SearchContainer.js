import From from "./From";
import To from "./To";
import DateFrom from "./DateFrom";
import DateTo from "./DateTo";
import { useState } from "react"

function SearchContainer() {

    const [from, setFrom] = useState("");

    console.log(from);

    return (
        <section className="search-cont">
            <From setFrom={setFrom}/>
            
        
        </section>
    )
}

export default SearchContainer;
