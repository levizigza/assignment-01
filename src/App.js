import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherData from './weatherdata.json';
import WeatherDisplay from './WeatherDisplay';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState(WeatherData);

  useEffect(() => {
    setFilteredData(
      WeatherData.filter(data =>
        data.city.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <div className="App">
      <header className="title">
        <h1>Weather App</h1>
      </header>
      <input
        type="text"
        value={searchTerm}
        onChange={event => setSearchTerm(event.target.value)}
        placeholder="Search for a city"
      />
      <section className="weather-display">
        {filteredData.map((weather, index) => (
          <WeatherDisplay key={index} weather={weather} />
        ))}
      </section>
    </div>
  );
};

export default App;