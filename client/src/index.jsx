import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
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
      <div style={this.state} onMouseEnter={this.hover} onMouseLeave={this.hover}>What about now?</div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('carousel')
);