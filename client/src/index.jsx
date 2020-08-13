import React from 'react';
import ReactDOM from 'react-dom';
import Gallery from './Gallery.jsx';

let location = 2;

ReactDOM.render(
  <Gallery location={location} />,
  document.getElementById('carousel'),
);
