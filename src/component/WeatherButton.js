import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, handleCityChange }) => {
  return (
    <div>
      <Button variant='success' onClick={() => handleCityChange('current')}>
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          variant='success'
          key={index}
          onClick={() => handleCityChange(item)}
        >
          {item}
        </Button>
      ))}
    </div>
  );
};

export default WeatherButton;
