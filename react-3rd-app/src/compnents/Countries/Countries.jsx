import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlags, setVisitedFlags] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountry = (country) => {
    console.log("Add this for visited country");
    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };
  //  flag handel
  const handelVisitedFlags = (flags) => {
    const newVisitedFlags = [...visitedFlags, flags];
    setVisitedFlags(newVisitedFlags);
  };

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited country  */}
      <div>
        <h5>Visited Country </h5>
        <ul>
          {visitedCountry.map((country) => (
            <li key={country.cca3}> {country.name.common}</li>
          ))}
        </ul>
      </div>
      {/* display flags  */}
      <div className="flag-container">
          {
            visitedFlags.map((flag, idx) => <img key={idx} src={flag} ></img>)
          }
      </div>
      {/* display countries  */}
      <div className="country-container">
        {countries.map((country) => (
          <Country
            key={country.cca3}
            country={country}
            handelVisitedCountry={handelVisitedCountry}
            handelVisitedFlags={handelVisitedFlags}
          ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
