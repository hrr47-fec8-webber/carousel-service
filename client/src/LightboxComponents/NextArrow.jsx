import React from 'react';
import lightbox from './lightbox.css';

const NextArrow = ({ next }) => (
  <div className={lightbox.arrow} onClick={next}>
    {'>'}
  </div>
);

export default NextArrow;
