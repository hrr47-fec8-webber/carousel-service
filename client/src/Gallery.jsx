import React from 'react';
import axios from 'axios';
import gallery from './gallery.css';
import lightbox from './LightboxComponents/lightbox.css';
import GalleryImage from './GalleryImage.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [],
      selected: 1,
      lightbox: false,
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
      lightbox: !this.state.lightbox,
    });
  }

  render() {
    if (this.state.images.length === 0) {
      return null;
    }
    const images = (this.state.images.length >= 5
      ? this.state.images.slice(0, 5)
      : this.state.images);

    return (
      <div>
        <div className={this.state.lightbox ? lightbox.modal : lightbox.modal.off}>
        </div>
        <div className={gallery.container}>
          <div className={gallery.flex}>
            <div className={gallery.grid} onClick={this.toggle}>
              {images.map((image) => (
                <GalleryImage
                  image={image}
                  length={images.length}
                />
              ))}
              {this.state.images.length
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
