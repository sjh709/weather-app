import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = ({ cities, handleCityChange, selectedCity }) => {
  return (
    <div>
      <Button
        variant={`${selectedCity === null ? 'outline-success' : 'success'}`}
        onClick={() => handleCityChange('current')}
      >
        Current Location
      </Button>
      {cities.map((item, index) => (
        <Button
          variant={`${selectedCity === item ? 'outline-success' : 'success'}`}
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
