import React from 'react';
import PropTypes from 'prop-types';

const WeatherIcon = ({ weather }) => {
  if (weather === 'Sunny') {
    return <img src="/path/to/sun-icon.png" alt="Sunny" />;
  } else {
    return <img src="/path/to/cloud-icon.png" alt="Cloudy" />;
  }
};

WeatherIcon.propTypes = {
  weather: PropTypes.string.isRequired,
};

export default WeatherIcon;