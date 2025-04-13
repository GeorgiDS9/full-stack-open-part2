import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://studies.cs.helsinki.fi/restcountries/api/all")
      .then((response) => {
        setCountries(response.data);
      });
  }, []);

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(filter.toLowerCase())
  );

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const showCountries = () => {
    if (filter === "") return null;

    // If there are over 10 countries that match the query, then the user is prompted to make their query more specific
    if (filteredCountries.length > 10) {
      return <p>Too many matches, specify another filter</p>;
    }

    // If there are ten or fewer countries, but more than one, then all countries matching the query are shown
    if (filteredCountries.length <= 10 && filteredCountries.length > 1) {
      return (
        <div>
          {filteredCountries.map((country) => (
            <div key={country.name.common}>{country.name.common}</div>
          ))}
        </div>
      );
    }

    // If there is only one country, then the country's information is shown
    if (filteredCountries.length === 1) {
      return (
        <div>
          <h1>{filteredCountries[0].name.common}</h1>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Area: {filteredCountries[0].area}</p>
          <h2>Languages</h2>
          <ul>
            {Object.values(filteredCountries[0].languages).map((language) => (
              <li key={language}>{language}</li>
            ))}
          </ul>
          <img src={filteredCountries[0].flags.png} alt="flag" />
        </div>
      );
    }
  };

  return (
    <div>
      <h2>Data for countries</h2>
      <div>
        find countries <input value={filter} onChange={handleFilterChange} />
      </div>
      {showCountries()}
    </div>
  );
};

export default App;
