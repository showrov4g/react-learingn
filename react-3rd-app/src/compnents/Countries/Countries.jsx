import { useEffect } from "react";
import { useState } from "react";
import Country from "../country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountry, setVisitedCountry] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handelVisitedCountry = (country) => {
    console.log("Add this for visited country");
    
    console.log(country)
  }

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h5>Visited Country </h5>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} country={country} handelVisitedCountry={handelVisitedCountry} ></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
