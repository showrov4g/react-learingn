import CountryData from "../CountryData/CountryData";

const CountryDetails = (props) => {
    const {country, handelVisitedCountry, handelVisitedFlags} = props
  return <div>
    <h4>Country Details</h4>
    <hr />
    {/* <CountryData 
        country={country}
        handelVisitedCountry = {handelVisitedCountry}
        handelVisitedFlags = {handelVisitedFlags}
    ></CountryData> */}

    <CountryData {...props}></CountryData>
  </div>;
};

export default CountryDetails;
