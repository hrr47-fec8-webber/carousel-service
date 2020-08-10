import React from 'react';
import lightbox from './lightbox.css';

const PrevArrow = ({ prev }) => (
  <div className={lightbox.arrow} onClick={prev}>
    {'<'}
  </div>
);

export default PrevArrow;
