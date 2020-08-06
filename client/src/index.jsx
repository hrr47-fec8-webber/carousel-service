import React from 'react';
import ReactDOM from 'react-dom';
import gallery from './gallery.css';

class GalleryView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    };
    this.hover = this.hover.bind(this);
  }

  hover() {
    this.setState({
      color: this.state.color === 'red' ? 'blue' : 'red'
    });
  }

  render() {
    return (
      <div className={gallery.gallery} style={this.state} onMouseEnter={this.hover} onMouseLeave={this.hover}>What about now?</div>
    );
  }
}

ReactDOM.render(
  <GalleryView />,
  document.getElementById('carousel')
);