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
        {events.map(event => <Collapsible{...event}/>)}
      </div>
    );
  }
}


class Collapsible extends Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div className="event">
        <button className="event-btn" onClick={this.toggle}>
          <p>{this.props.name} - {this.props.ability}</p>
          <p><em>{this.props.start} - {this.props.end}</em></p>
        </button>
        <div className={`collapsible ${this.state.open ? "open" : "closed"}`} >
          {this.props.description}
        </div>
      </div>
    );
  }
}

export default App;
