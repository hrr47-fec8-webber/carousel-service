import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import gallery from './gallery.css';

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
    return (
      <div className={gallery.gallery} style={this.state} onMouseEnter={this.hover} onMouseLeave={this.hover}>What about now?</div>
    );
  }
}

let location = '1';

ReactDOM.render(
  <Gallery location={location}/>,
  document.getElementById('carousel')
);