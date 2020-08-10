import React from 'react';
import lightbox from './lightbox.css';

class Lightbox extends React.Component {
  constructor(props) {
    super(props);
    const { visible, selected, images } = this.props;
    this.state = {
      images,
      selected,
      visible,
    };
  }

  render() {
    const {
      visible,
      selected,
      images,
      toggle
    } = this.props;

    return (
      <div>
        <button type="submit" onClick={toggle}>
          <span>X </span>
          Close
        </button>
        <div>
          {selected}
          /
          {images.length}
        </div>
        {/* <PrevArrow /> */}
        <div>
          {/* <img src={images[selected - 1].url} alt="" /> */}
        </div>
        {/* <NextArrow /> */}
      </div>
    );
  }
}

export default Lightbox;
