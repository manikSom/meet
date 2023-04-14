import React, { Component } from 'react';
import './App.css';
import './nprogress.css';
// COMPONENTS //////////
import CitySearch from './CitySearch';
import NumberOfEvents from './NumberOfEvents';
import EventList from './EventList';
import TopBar from './TopBar';
import { InfoAlert } from './Alert';
// DATA / FUNCS //////////
import WelcomeScreen from './WelcomeScreen';
import { getEvents, extractLocations, checkToken, getAccessToken } from
'./api';



class App extends Component {
  state = {
    events: [],
    locations: [],
    seletedLocation: 'all',
    eventCount: 32,
    showWelcomeScreen: undefined
    // infoText: ''
  }
  
  networkStatus = () => {
    this.setState({infoText: navigator.online ? 'online' : 'offline'})
  };
  
  async componentDidMount() {
    this.mounted = true;
    const accessToken = localStorage.getItem('access_token');
    const isTokenValid = (await checkToken(accessToken)).error ? false : true;
    const searchParams = new URLSearchParams(window.location.search);
    const code = searchParams.get("code");
    
    this.setState({ showWelcomeScreen: !(code || isTokenValid) });

    if ((code || isTokenValid) && this.mounted) {
      getEvents().then((events) => {
        if (this.mounted) {
          this.setState({ events, locations: extractLocations(events) });
        }
      });
    }
    
    window.addEventListener('online', this.networkStatus);
    window.addEventListener('offline', this.networkStatus);
    this.networkStatus();
  }

  componentWillUnmount(){ this.mounted = false; }

  updateEvents = (location, inputNumber) => {
    const {eventCount, seletedLocation} = this.state;
    if (location) {
      getEvents().then((events) => {
        const locationEvents = (location === 'all') ?
        events :
        events.filter((event) => event.location === location);
        const eventsToShow=locationEvents.slice(0, eventCount);
        this.setState({
        events: eventsToShow,
        seletedLocation: location
        });
      });  
    } else {
      getEvents().then((events) => {
        const locationEvents = (seletedLocation === 'all') ?
        events :
        events.filter((event) => event.location === seletedLocation);
        const eventsToShow=locationEvents.slice(0, inputNumber);
        this.setState({
          events: eventsToShow,
          eventCount: inputNumber
        });
      })
    }
  }

  render() {
    if (this.state.showWelcomeScreen === undefined) return <div className="App" />

    return (
      <div className="App">
        <InfoAlert text={this.state.infoText} />
        <TopBar />
        <div className="filter-box">
          <CitySearch
            locations={this.state.locations}
            updateEvents= {this.updateEvents}
          />
          <NumberOfEvents
            eventCount={this.state.eventCount}
            updateEvents={this.updateEvents}
          />
        </div>
        <EventList events={this.state.events} />
        <WelcomeScreen
          showWelcomeScreen={this.state.showWelcomeScreen}
          getAccessToken={() => { getAccessToken() }}
        />
      </div>
    );
  }
}

export default App;