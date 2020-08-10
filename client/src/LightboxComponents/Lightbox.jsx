import React from 'react';
import lightbox from './lightbox.css';
import PrevArrow from './PrevArrow.jsx';
import NextArrow from './NextArrow.jsx';

class Lightbox extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { toggle, next, prev, images, selected } = this.props;

    return (
      <div className={lightbox.container}>
        <div className={lightbox.grid}>
          <div className={lightbox.close}>
            <button className={lightbox.button} type="submit" onClick={toggle}>
              <span>X </span>
              Close
            </button>
          </div>
          <div className={lightbox.selected}>
            {selected}
            /
            {images.length}
          </div>
          <div className={lightbox.share}> </div>
          <div className={lightbox.carousel}>
            <PrevArrow prev={prev} />
            <div>
              hi
              {/* <img src={images[selected - 1].url} alt="" /> */}
            </div>
            <NextArrow next={next} />
          </div>
        </div>
      </div>
    );
  }
}

export default Lightbox;
