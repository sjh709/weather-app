import React from 'react';

const WeatherBox = ({ weather }) => {
  const getFahrenheit = (temp) => {
    return (temp * 1.8 + 32).toFixed(2);
  };

  return (
    <div className='weather-box'>
      <div>{weather?.name}</div>
      <h2>
        {weather?.main.temp}°C / {weather && getFahrenheit(weather.main.temp)}°F
      </h2>
      <h3>{weather?.weather[0].description}</h3>
    </div>
  );
};

export default WeatherBox;
