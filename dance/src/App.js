import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    var events = [    
      {
          "name": "Zouk Social",
          "ability": "All",
          "start": "7:00pm",
          "end": "7:30pm",
          "company": "Cloud 9 Zouk",
          "description": "Come join us for a fun evening of social dancing! Open to those of all ages and abilities."
      },
      {
          "name": "Salsa Class",
          "ability": "Intermediate",
          "start": "6:00pm",
          "end": "7:00pm",
          "company": "50/50",
          "description": "Come try our exciting block of classes."
      }
  ];
    
    return (
      <div id="events">
        {events.map(event => <Event{...event}/>)}
      </div>
    );
  }
}


class Event extends Component {
  constructor(props) {
    super(props);

    // Initial state
    this.state = {
      open: false,
      maxHeight: 0
    };
    this.toggle = this.toggle.bind(this);
  }
  // Toggles the status of open
  toggle(description) {
    this.setState({open: !this.state.open});
    if (this.state.open) {
      description.style.maxHeight = description.scrollHeight + "px";
    } else {
      description.style.maxHeight = 0;
    }
  }

  render() {
    var description = 
      <div className="collapsible">
        {this.props.description}
      </div>;
    return (
      <div className="event">
        <button className="event-btn" onClick={this.toggle(description)}>
          <p>{this.props.name} - {this.props.ability}</p>
          <p><em>{this.props.start} - {this.props.end}</em></p>
        </button>
        {description}
      </div>
    );
  }
}
 
// Ignore This
class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({open: !this.state.open});
    if (this.state.open) {
      this.style.maxHeight = this.scrollHeight + "px";
    } else {
      this.style.maxHeight = 0;
    }
  }

  render() {      
    return (
      <div className="collapsible">
        {this.props.description}
      </div>
    );
  }
}

export default App;
