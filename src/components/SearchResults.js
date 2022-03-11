import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import App from "../App";
import { DateTime } from 'luxon';

function SearchResults({ data }) {
    console.log(data)

    // DateTime.fromMillis(element.dTime * 1000).toFormat('hh:mm');
    // console.log(DateTime.fromMillis(element.dTime * 1000).toFormat('hh:mm'));

  return (
    <div>
      <h1>Serch Results: </h1>
      {data.map((element, i) => (
        <div key={i}>
          <p><strong>Price:</strong> {element.price} EURO</p>
          <p><strong>Price of normal ticket and bag:</strong> {element.price + element.bags_price[1]} EUR</p>
          <p><strong>Name of origin destination:</strong> {element.cityFrom}</p>
          <p><strong>Code of the origin destination:</strong> {element.flyFrom}</p>
          <p><strong>Name of the destination city:</strong> {element.cityTo}</p>
          <p><strong>Code of the destination:</strong> {element.flyTo}</p>
          <p><strong>Date from:</strong> {DateTime.fromMillis(element.dTime * 1000).toFormat('hh:mm')}</p> 
          <p><strong>Date to:</strong> {DateTime.fromMillis(element.aTime * 1000).toFormat('hh:mm')}</p>
          <p><strong>Total duration of your flight is:</strong> {DateTime.fromMillis(element.duration.total * 1000).toFormat('hh:mm')}</p>
          <hr/>
        {/* <p><strong>Region:</strong> {data.region}</p>
        {data.capital && <p><strong>Capital:</strong> {data.capital[0]}</p>} */}
        </div>
      )
      )}
    </div>
  )
}

export default SearchResults;