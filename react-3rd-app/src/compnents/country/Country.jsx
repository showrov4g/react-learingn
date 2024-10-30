import { useState } from "react";
import "./Country.css";
import CountryDetails from "../CountryDetails/CountryDetails";

const Country = ({ country, handelVisitedCountry, handelVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setvisited] = useState();

  const handelVisited = () => {
    setvisited(!visited);
  };



  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "green" : "white" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>code: {cca3}</small>
      </p>
      <button onClick={()=>{handelVisitedCountry(country)}}>Mark visited</button>
      <br />
      <button onClick={()=> handelVisitedFlags(country.flags.png)}>Add visited Flag</button>
      <br />
      <button onClick={handelVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? " I have visited This country" : "I want to visit"}
      <hr />
      <CountryDetails 
      country={country} 
      handelVisitedCountry={handelVisitedCountry}
      handelVisitedFlags={handelVisitedFlags}
      ></CountryDetails>
    </div>
  );
};

export default Country;
