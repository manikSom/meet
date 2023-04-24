import React, { Component } from "react";

class ThemeChanger extends Component {
  constructor() {
    super();
    this.state = { theme: 190 };
  }

  themeUp = () => {
    let newTheme = this.state.theme + 8;
    // Hue value is 0 through 360. subtract 360 from the #
    if(newTheme > 360) newTheme -= 360;
    this.setState({ theme: newTheme });
    this.updateTheme();
  }

  themeDown = () => {
    let newTheme = this.state.theme - 8;
    // Hue value is 0 through 360. add 360 to the negative #
    if(newTheme < 0) newTheme += 360;
    this.setState({ theme: newTheme })
    this.updateTheme();
  }
  
  updateTheme () {
    document.documentElement.style.setProperty('--primary-hue', this.state.theme)
  }
}

class ThemeChangerUp extends ThemeChanger {
  render() {
    return (
      <button
        className="ThemeChangerUp"
        onClick={this.themeUp}
      >
        ▲
      </button>
    );
  }
}

class ThemeChangerDown extends ThemeChanger {
  render() {
    return (
      <button
        className="ThemeChangerDown"
        onClick={this.themeDown}
      >
        ▼
      </button>
    );
  }
}

export { ThemeChangerUp, ThemeChangerDown };