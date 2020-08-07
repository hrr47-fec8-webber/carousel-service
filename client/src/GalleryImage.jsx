import React from 'react';
import gallery from './gallery.css';

const GalleryImage = ({image, length}) => {
  let imgClass = `img${image.img_order}in${length}`;
  let url = `url(${image.url})`;
  return (
    <div className={gallery[imgClass]} style={{backgroundImage: url}}></div>
  );

};

export default GalleryImage;