import React from 'react';
import lightbox from './lightbox.css';

const PrevArrow = ({ prev, selected }) => (
  <div className={selected === 1 ? lightbox.arrowOff : lightbox.arrow} onClick={prev} id="prev-arrow">
    <svg height="10" width="6" transform="rotate(180)">
      <line x1="0" y1="0" x2="5" y2="5" style={{ stroke: 'black', strokeWidth: 1.5 }} />
      <line x1="0" y1="10" x2="5" y2="5" style={{ stroke: 'black', strokeWidth: 1.5 }} />
    </svg>
  </div>
);

export default PrevArrow;
