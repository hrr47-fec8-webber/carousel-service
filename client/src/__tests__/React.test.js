import React from 'react';
import renderer from 'react-test-renderer';
import axios from 'axios';
import { shallow, mount, render } from 'enzyme';

import GalleryImage from '../GalleryImage.jsx';
import Gallery from '../Gallery.jsx';
import Lightbox from '../LightboxComponents/Lightbox.jsx';
import PrevArrow from '../LightboxComponents/PrevArrow.jsx';
import NextArrow from '../LightboxComponents/NextArrow.jsx';

jest.mock('axios');

describe('Gallery Component', () => {
  const images = [
    {
      id: 5,
      url: 'abcd',
      location_id: 7,
      img_order: 1,
    },
    {
      id: 6,
      url: 'efgh',
      location_id: 7,
      img_order: 2,
    },
    {
      id: 7,
      url: 'ijkl',
      location_id: 7,
      img_order: 3,
    },
    {
      id: 8,
      url: 'mnop',
      location_id: 7,
      img_order: 4,
    },
  ];
  const res = { data: images };
  axios.get.mockResolvedValue(res);
});

describe('Gallery Image Component', () => {
  it('renders correctly', () => {
    const image = {
      img_order: 1,
      url: 'xyz',
    };
    const component = shallow(<GalleryImage image={image} length={1} />);
    expect(component).toMatchSnapshot();
  });
});

describe('Previous Image Arrow Component', () => {
  it('renders correctly', () => {
    const props = {
      selected: 2,
      prev() {},
    };
    const prevArrow = shallow(<PrevArrow selected={props.selected} prev={props.prev} />);
    expect(prevArrow).toMatchSnapshot();
  });

  it('toggles class and disappears if displayed image is the first in the order', () => {
    const props = {
      selected: 2,
      prev() {},
    };
    const wrapper = mount(<PrevArrow selected={props.selected} prev={props.prev} />);
    expect(wrapper.find('#prev-arrow').hasClass('arrow')).toBe(true);
    expect(wrapper.find('#prev-arrow').hasClass('arrowOff')).toBe(false);

    wrapper.setProps({ selected: 1, prev: props.prev });
    expect(wrapper.find('#prev-arrow').hasClass('arrow')).toBe(false);
    expect(wrapper.find('#prev-arrow').hasClass('arrowOff')).toBe(true);

    wrapper.unmount();
  });
});

describe('Next Image Arrow Component', () => {
  const props = {
    selected: 2,
    prev() {},
    length: 3,
  };

  it('renders correctly', () => {
    const nextArrow = shallow(
      <NextArrow
        selected={props.selected}
        next={props.next}
        length={props.length}
      />,
    );
    expect(nextArrow).toMatchSnapshot();
  });

  it('toggles class and disappears if displayed image is the last in the order', () => {
    const props = {
      selected: 2,
      prev() {},
      length: 3,
    };

    const wrapper = mount(
      <NextArrow
        selected={props.selected}
        prev={props.prev}
        length={props.length}
      />,
    );
    expect(wrapper.find('#next-arrow').hasClass('arrow')).toBe(true);
    expect(wrapper.find('#next-arrow').hasClass('arrowOff')).toBe(false);

    wrapper.setProps({ selected: 3, prev: props.prev, length: 3 });
    expect(wrapper.find('#next-arrow').hasClass('arrow')).toBe(false);
    expect(wrapper.find('#next-arrow').hasClass('arrowOff')).toBe(true);
  })
});
