import React, { Component } from 'react';
import './App.css';
// COMPONENTS //////////
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';

class App extends Component {
  state = {
    events: [],
    locations: [],
    numberOfEvents: 10
  }

  render() {
    return (
      <div className="App">
        <CitySearch />
        <NumberOfEvents />
        <EventList />
      </div>
    );
  }
}

export default App;