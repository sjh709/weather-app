import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = (props) => {
  const getWeatherByCity = (city) => {
    city === 'Current'
      ? props.getCurrentLocation()
      : props.getWeatherByCity(city);
  };

  return (
    <div>
      <Button variant='success' onClick={() => getWeatherByCity('Current')}>
        Current Location
      </Button>
      <Button variant='success' onClick={() => getWeatherByCity('Paris')}>
        paris
      </Button>
      <Button variant='success' onClick={() => getWeatherByCity('London')}>
        london
      </Button>
      <Button variant='success' onClick={() => getWeatherByCity('Taipei')}>
        taipei
      </Button>
      <Button variant='success' onClick={() => getWeatherByCity('Seoul')}>
        seoul
      </Button>
    </div>
  );
};

export default WeatherButton;
