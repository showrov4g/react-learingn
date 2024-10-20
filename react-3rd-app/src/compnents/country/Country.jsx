import { useState } from "react";
import "./Country.css";

const Country = ({ country, handelVisitedCountry }) => {
  const { name, flags, population, area, cca3 } = country;

  const [visited, setvisited] = useState();

  const handelVisited = () => {
    setvisited(!visited);
  };

  console.log(handelVisitedCountry)
  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "green" : "white" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>code: {cca3}</small>
      </p>
      <button>Mark visited</button>
      <br />
      <button onClick={handelVisited}>{visited ? "Visited" : "Going"}</button>
      {visited ? " I have visited This country" : "I want to visit"}
    </div>
  );
};

export default Country;
