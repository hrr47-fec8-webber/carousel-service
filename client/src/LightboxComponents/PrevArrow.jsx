import React from 'react';
import lightbox from './lightbox.css';

const PrevArrow = ({ prev, selected }) => (
  <div className={selected === 1 ? lightbox.arrowOff : lightbox.arrow} onClick={prev}>
    {'<'}
  </div>
);

export default PrevArrow;
