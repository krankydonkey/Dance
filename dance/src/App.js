import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div id="events">
        
      </div>
    );
  }
}


class Event extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {open: false};
    this.toggle = this.toggle.bind(this);
  }
  // Toggles the status of open
  toggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="event">
        <button className="event btn" onClick={this.toggle}>
          <p>{this.props.name} - {this.props.ability}</p>
          <p><em>{this.props.start} - {this.props.end}</em></p>
        </button>
        <div className={this.state.open ? "expanded" : "collapsed"}>
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default App;
