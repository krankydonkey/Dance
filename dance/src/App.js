import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    const events = [    
      {
          "id": 0,
          "name": "Zouk Social",
          "ability": "All",
          "start": "7:00pm",
          "end": "7:30pm",
          "company": "Cloud 9 Zouk",
          "description": "Come join us for a fun evening of social dancing! Open to those of all ages and abilities."
      },
      {
          "id": 1,
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
        {events.map(event => <Attempt2 key={event.id} {...event}/>)}
      </div>
    );
  }
}


// class Collapsible extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {open: false};
//     this.toggle = this.toggle.bind(this);
//   }

//   toggle() {
//     this.setState({open: !this.state.open});
//   }

//   render() {
//     return (
//       <div className="event">
//         <button className="event-btn" onClick={this.toggle}>
//           <p>{this.props.name} - {this.props.ability}</p>
//           <p><em>{this.props.start} - {this.props.end}</em></p>
//         </button>
//         <div className={`collapsible ${this.state.open ? "open" : "closed"}`} >
//           {this.props.description}
//         </div>
//       </div>
//     );
//   }
// }

class Attempt2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      renderedHeight: null,
    };
    this.lastHeight = null;
  }

  toggle() {
    this.setState({open: !this.state.open});
  }

  calculateWithElement(elem) {
    if (elem && elem.scrollHeight !== this.lastHeight && elem.scrollHeight) {
      this.lastHeight = elem.scrollHeight;
      this.setState({ renderedHeight: elem.scrollHeight });
    }
  }

  render() {
    const maxHeight = this.state.open ? this.state.renderedHeight : 0;

    return (
      <div className="event">
        <button className="event-btn" onClick={() => this.toggle()}>
          <p>{this.props.name} - {this.props.ability}</p>
          <p><em>{this.props.start} - {this.props.end}</em></p>
        </button>
        <div className="collapsible" style={{ maxHeight }} ref={elem => this.calculateWithElement(elem)}>
          <div className="collapsible-inner">
            {this.props.description}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
