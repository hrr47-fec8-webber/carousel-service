import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import gallery from './gallery.css';
import GalleryImage from './GalleryImage.jsx';

class Gallery extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      images: []
    };
    this.hover = this.hover.bind(this);
    this.fetch = this.fetch.bind(this);
  }

  hover() {
    this.setState({
      color: this.state.color === 'red' ? 'blue' : 'red'
    });
  }

  fetch(location) {
    axios.get(`/api/images/${location}`)
      .then(data => this.setState({images: data.data}));
  }

  componentDidMount() {
    this.fetch(this.props.location);
  }

  render() {
    let length = this.state.images.length;
    let div = (<div></div>);
    let images;
    if (length > 0) {
      images = (length >= 5 ? this.state.images.slice(0, 5) : this.state.images);
      div = images.map(image => <GalleryImage image={image} length={images.length} />);
    }
    return (
      <div className={gallery.body}>
        <div className={gallery.grid} onMouseEnter={this.hover} onMouseLeave={this.hover}>
          {div}
          {this.state.images.length ? <button className={gallery.showAll}>Show all photos</button> : <div></div>}
        </div>
      </div>
    );
  }
}

let location = '1';

ReactDOM.render(
  <Gallery location={location}/>,
  document.getElementById('carousel')
);