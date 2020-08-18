/* eslint-disable react/jsx-filename-extension */
/* global jest, it, expect, describe, document, e */
/* eslint import/extensions: ["error", {"jsx": always, "css": always}] */
import React from 'react';
import axios from 'axios';
import { shallow, mount } from 'enzyme';

import GalleryImage from '../GalleryImage.jsx';
import Gallery from '../Gallery.jsx';
import PrevArrow from '../LightboxComponents/PrevArrow.jsx';
import NextArrow from '../LightboxComponents/NextArrow.jsx';

jest.mock('axios');

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

axios.get = jest.fn().mockResolvedValue(res);

const events = {};
document.addEventListener = jest.fn((event, cb) => {
  events[event] = cb;
});

let e = { preventDefault: () => {} };

describe('Gallery Component', () => {
  it('renders correctly', async () => {
    const galleryInstance = await shallow(<Gallery location={7} />);
    expect(galleryInstance).toMatchSnapshot();
    galleryInstance.unmount();
  });

  it('should make an axios get request upon mounting', async () => {
    const getSpy = jest.spyOn(axios, 'get');
    const galleryInstance = await mount(<Gallery location={7} />);
    expect(getSpy).toHaveBeenCalled();
    galleryInstance.unmount();
    getSpy.mockReset();
    getSpy.mockRestore();
  });

  it('should generate a number of gallery images based on size of return data', async () => {
    axios.get = jest.fn().mockResolvedValue(res);
    const galleryInstance = await mount(<Gallery location={7} />);

    expect(galleryInstance.state().selected).toBe(1);
    expect(galleryInstance.state().images.length).toBe(4);

    galleryInstance.unmount();
  });

  it('should toggle classes on the lightbox when gallery is clicked', async () => {
    const galleryInstance = await shallow(<Gallery location={7} />);

    expect(galleryInstance.find('#lightbox').hasClass('off')).toBe(true);
    expect(galleryInstance.find('#lightbox').hasClass('modal')).toBe(false);

    galleryInstance.find('#gallery-grid').simulate('click');

    expect(galleryInstance.find('#lightbox').hasClass('off')).toBe(false);
    expect(galleryInstance.find('#lightbox').hasClass('modal')).toBe(true);

    galleryInstance.unmount();
  });

  it('should advance images when next arrow is clicked in lightbox', async () => {
    const galleryInstance = await mount(<Gallery location={7} />);
    expect(galleryInstance.state().selected).toBe(1);

    galleryInstance.update();

    galleryInstance.find('#next-arrow').simulate('click');
    expect(galleryInstance.state().selected).toBe(2);
    galleryInstance.unmount();
  });

  it('should advance images when right arrow key is pressed', async () => {
    const galleryInstance = await mount(<Gallery location={7} />);
    expect(galleryInstance.state().selected).toBe(1);

    galleryInstance.update();

    galleryInstance.find('#gallery-grid').simulate('click');
    events.keydown({ keyCode: 39 });
    expect(galleryInstance.state().selected).toBe(2);
    galleryInstance.unmount();
  });

  it('should go to previous image when previous arrow is clicked in lightbox', async () => {
    const galleryInstance = await mount(<Gallery location={7} />);
    expect(galleryInstance.state().selected).toBe(1);

    galleryInstance.update();

    galleryInstance.find('#next-arrow').simulate('click');
    expect(galleryInstance.state().selected).toBe(2);

    galleryInstance.find('#prev-arrow').simulate('click');
    expect(galleryInstance.state().selected).toBe(1);

    galleryInstance.unmount();
  });

  it('should return to previous image when left arrow key is pressed', async () => {
    const galleryInstance = await mount(<Gallery location={7} />);
    expect(galleryInstance.state().selected).toBe(1);

    galleryInstance.update();

    galleryInstance.find('#gallery-grid').simulate('click');
    events.keydown({ keyCode: 39 });
    expect(galleryInstance.state().selected).toBe(2);

    events.keydown({ keyCode: 37 });
    expect(galleryInstance.state().selected).toBe(1);

    galleryInstance.unmount();
  });

  it('should close the lightbox when close button is clicked', async () => {
    const galleryInstance = await mount(<Gallery location={7} />);
    expect(galleryInstance.state().modal).toBe(false);

    galleryInstance.update();

    galleryInstance.find('#gallery-grid').simulate('click');
    expect(galleryInstance.state().modal).toBe(true);

    galleryInstance.find('#close').simulate('click');
    expect(galleryInstance.state().modal).toBe(false);

    galleryInstance.unmount();
  });

  it('should close the lightbox when esc key is pressed', async () => {
    const galleryInstance = await mount(<Gallery location={7} />);
    expect(galleryInstance.state().modal).toBe(false);

    galleryInstance.update();

    galleryInstance.find('#gallery-grid').simulate('click');
    expect(galleryInstance.state().modal).toBe(true);

    events.keydown({ keyCode: 27 });
    expect(galleryInstance.state().modal).toBe(false);

    galleryInstance.unmount();
  });
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
  it('renders correctly', () => {
    const props = {
      selected: 2,
      prev() {},
      length: 3,
    };
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
  });
});
