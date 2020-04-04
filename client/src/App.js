import React from 'react';

import CurrentForecast from "./components/CurrentForecast/CurrentForecast"
import WeekForecast from "./components/WeekForecast/WeekForecast"
import Highlight from "./components/Highlight/Highlight"
import './index.css'

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {

    }
  }

  render() {
    return (
      <div className="layout">
        <CurrentForecast className="currentForecast"/>
        <div className="weekForecast">
          <h2 className="title" id="weekForecastTitle">This Week</h2>
          <WeekForecast idName="dayOne"/>
          <WeekForecast idName="dayTwo"/>
          <WeekForecast idName="dayThree"/>
          <WeekForecast idName="dayFour"/>
          <WeekForecast idName="dayFive"/>
          <WeekForecast idName="daySix"/>
          <WeekForecast idName="daySeven"/>
        </div>
        <div className="forecastHighlight">
          <h2 className="title" id="forecastHighlightTitle">Today's Highlights</h2>
          <Highlight idName="windStatus"/>
        </div>
      </div>
    );
  }
}

export default IndexPage;
