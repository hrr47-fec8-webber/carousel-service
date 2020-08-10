import React from 'react';
import gallery from './gallery.css';

const GalleryImage = ({image, length, toggle}) => {
  const id = image.img_order;
  const imgClass = `img${id}in${length}`;
  const url = `url(${image.url})`;
  return (
    <div className={gallery[imgClass]} style={{ backgroundImage: url }} id={id}>  </div>
  );
};

export default GalleryImage;
