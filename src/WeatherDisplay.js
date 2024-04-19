import React from 'react';
import PropTypes from 'prop-types'; // Import PropTypes for prop validation
import WeatherIcon from './weathericon';
import './weatherdisplay.css';

function WeatherDisplay({ weather: { city, temperature, weather } }) {
  // Add debugging output
  console.log('Rendering WeatherDisplay with props:', { city, temperature, weather });

  return (
    <div className='weather-display'>
      <h1 className='city'>Weather for {city}</h1>
      <WeatherIcon />
      <p className='weather-info'>Temperature: {temperature}</p>
      <p className='weather-info'>Weather: {weather}</p>
    </div>
  );
}

// Add prop validation
WeatherDisplay.propTypes = {
  weather: PropTypes.shape({
    city: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired,
  }).isRequired,
};

export default WeatherDisplay;