import React from 'react';
import axios from 'axios';
import gallery from './gallery.css';
import lightbox from './LightboxComponents/lightbox.css';
import GalleryImage from './GalleryImage.jsx';
import Lightbox from './LightboxComponents/Lightbox.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selected: 1,
      modal: false,
    };
    this.fetch = this.fetch.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount() {
    this.fetch(this.props.location);
  }

  fetch(location) {
    axios.get(`/api/images/${location}`)
      .then((data) => this.setState({ images: data.data }));
  }

  toggle(e) {
    this.setState({
      selected: e.target.id || 1,
      modal: !this.state.modal,
    });
  }

  render() {
    const { images, selected, modal } = this.state;
    if (images.length === 0) {
      return null;
    }
    const batch = (images.length >= 5
      ? images.slice(0, 5)
      : images);

    return (
      <div>
        <div className={modal ? lightbox.modal : lightbox.off}>
          <Lightbox
            visible={modal}
            selected={selected}
            images={images}
            toggle={this.toggle}
          />
        </div>
        <div className={gallery.container}>
          <div className={gallery.flex}>
            <div className={gallery.grid} onClick={this.toggle}>
              {batch.map((image) => (
                <GalleryImage
                  image={image}
                  length={batch.length}
                />
              ))}
              {images.length
                ? <button type="submit" className={gallery.showAll}>Show all photos</button>
                : (<div> </div>)}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Gallery;
