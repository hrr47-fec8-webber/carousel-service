/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import lightbox from './lightbox.css';

const NextArrow = ({ next, selected, length }) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions
  <div className={selected === length ? lightbox.arrowOff : lightbox.arrow} onClick={next} id="next-arrow">
    <svg height="10" width="6">
      <line x1="0" y1="0" x2="5" y2="5" style={{ stroke: 'black', strokeWidth: 1.5 }} />
      <line x1="0" y1="10" x2="5" y2="5" style={{ stroke: 'black', strokeWidth: 1.5 }} />
    </svg>
  </div>
);

export default NextArrow;
