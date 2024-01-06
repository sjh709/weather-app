import React from 'react';
import { Button } from 'react-bootstrap';

const WeatherButton = () => {
  return (
    <div>
      <Button variant='success'>Current Location</Button>
      <Button variant='success'>paris</Button>
      <Button variant='success'>london</Button>
      <Button variant='success'>taipei</Button>
      <Button variant='success'>seoul</Button>
    </div>
  );
};

export default WeatherButton;
