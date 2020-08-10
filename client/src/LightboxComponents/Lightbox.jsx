import React from 'react';
import lightbox from './lightbox.css';
import PrevArrow from './PrevArrow.jsx';
import NextArrow from './NextArrow.jsx';

const Lightbox = ({ toggle, next, prev, images, selected }) => (
  <div className={lightbox.container}>
    <div className={lightbox.grid}>
      <div className={lightbox.close}>
        <button className={lightbox.button} type="submit" onClick={toggle}>
          <span>X </span>
          Close
        </button>
      </div>
      <div className={lightbox.selected}>
        {`${selected} / ${images.length}`}
      </div>
      <div className={lightbox.share}> </div>
      <div className={lightbox.carousel}>
        <PrevArrow prev={prev} selected={selected} />
        {images.map((image) => <img className={selected === image.img_order ? lightbox.image : lightbox.imageOff} src={image.url} alt=""></img>)}
        <NextArrow next={next} selected={selected} length={images.length} />
      </div>
    </div>
  </div>
);

export default Lightbox;
