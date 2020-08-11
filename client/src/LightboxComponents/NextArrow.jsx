import React from 'react';
import lightbox from './lightbox.css';

const NextArrow = ({ next, selected, length}) => (
  <div className={selected === length ? lightbox.arrowOff : lightbox.arrow} onClick={next} id="next-arrow">
    {'>'}
  </div>
);

export default NextArrow;
