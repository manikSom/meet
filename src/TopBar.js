import React, { Component } from "react";
import { InfoAlert } from './Alert';
import { ThemeChangerUp } from "./ThemeChanger";

class TopBar extends Component {
  state = { infoText: ''}

  networkStatus = () => {
    this.setState({infoText: navigator.online ? 'online' : 'offline'})
  };

  async componentDidMount() {
    window.addEventListener('online', this.networkStatus);
    window.addEventListener('offline', this.networkStatus);
    this.networkStatus();
  }

  render() {
    return (
      <div className="TopBar">
        <div className="utilities">
          <InfoAlert text={this.state.infoText} />
        </div>
        <div className="title">
          <h1>meet App&nbsp;</h1>
          <ThemeChangerUp />
        </div>
        <h3 className="subtitle text-white">up to speed with new Tech!</h3>
      </div>
    );
  }
}

export default TopBar;