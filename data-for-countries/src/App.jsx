import { useState, useEffect } from "react";
import axios from "axios";

const App = () => {
  const [filter, setFilter] = useState("");
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

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
    setSelectedCountry(null);
  };

  const countryInfo = (country) => {
    return (
      <div>
        <h1>{country.name.common}</h1>
        <p>Capital: {country.capital}</p>
        <p>Area: {country.area}</p>
        <h2>Languages</h2>
        <ul>
          {Object.values(country.languages).map((language) => (
            <li key={language}>{language}</li>
          ))}
        </ul>
        <img src={country.flags.png} alt="flag" />
      </div>
    );
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
            <div
              key={country.name.common}
              style={{ display: "flex", gap: "10px", alignItems: "center" }}
            >
              <span>{country.name.common}</span>
              <button onClick={() => setSelectedCountry(country)}>show</button>
            </div>
          ))}
          {selectedCountry && countryInfo(selectedCountry)}
        </div>
      );
    }

    // If there is only one country, then the country's information is shown
    if (filteredCountries.length === 1) {
      return countryInfo(filteredCountries[0]);
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
