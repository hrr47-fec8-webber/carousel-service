/* eslint-disable react/prop-types */
import React from 'react';
import gallery from './gallery.css';

const GalleryImage = ({ image, length }) => {
  const id = image.img_order;
  console.log(id)
  const imgClass = `img${id}in${length}`;
  console.log(imgClass)
  const url = `url(${image.url})`;
  return (
    <div className={gallery[imgClass]} style={{ backgroundImage: url }} name={id} id={id}> </div>
  );
};

export default GalleryImage;
