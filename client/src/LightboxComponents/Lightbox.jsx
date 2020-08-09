import React from 'react';
import lightbox from './lightbox.css';

class Lightbox extends React.Component {
  constructor({ images, selected }) {
    super({ images, selected });
    this.state = {
      images: [],
      current: selected,
    };
  }

  render() {
    return (
      <div>
        <button type="submit">
          <span>X</span>
          Close
        </button>
        <div>{this.state.current}
          / {this.state.images.length}
        </div>
        <PrevArrow />
        <div>
          <img src={this.state.images[this.state.selected - 1].url} alt="" />
        </div>
        <NextArrow />
      </div>
    );
  }
}

export default Lightbox;
