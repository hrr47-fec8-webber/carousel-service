import React from 'react';
import lightbox from './lightbox.css';

const ShareIcon = () => (
  <svg className={lightbox.shareIcon} viewBox="0 0 32 32" style={{ display: 'inline', height: '16px' }}>
    <g vectorEffect="non-scaling stroke" fill="none" stroke="black" strokeWidth="2">
      <path d="m27 18v9c0 1.1045695-.8954305 2-2 2h-18c-1.1045695 0-2-.8954305-2-2v-9"> </path>
      <path d="m4.5 14.5h23z" transform="matrix(0 1 -1 0 30.5 -1.5)"> </path>
      <path d="m6 13 9.2928932-9.2928932c.3905243-.39052429 1.0236893-.39052429 1.4142136 0l9.2928932 9.29289322"> </path>
    </g>
  </svg>
);

export default ShareIcon;
