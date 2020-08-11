import React from 'react';
import renderer from 'react-test-renderer';
import GalleryImage from '../GalleryImage.jsx';

describe('GalleryImage Componet', () => {
  it('renders correctly', () => {
    const image = {
      img_order: 1,
      url: 'xyz',
    };
    const galleryImage = renderer
      .create(<GalleryImage image={image} length={1} />)
      .toJSON();
    expect(galleryImage).toMatchSnapshot();
  });
});
