import React from 'react';

import CurrentForecast from "./components/CurrentForecast/CurrentForecast"
import WeekForecast from "./components/WeekForecast/WeekForecast"
import Highlight from "./components/Highlight/Highlight"
import SunHighlight from "./components/SunHighlight/SunHighlight"
import oneD from "./images/01d.svg"
import twoD from "./images/02d.svg"
import threeD from "./images/03d.svg"
import fourD from "./images/04d.svg"
import nineD from "./images/09d.svg"
import tenD from "./images/10d.svg"
import elevenD from "./images/11d.svg"
import thirteenD from "./images/13d.svg"
import fiftyD from "./images/50d.svg"
import oneN from "./images/01n.svg"
import twoN from "./images/02n.svg"

import './index.css'
import fetch from 'node-fetch';

var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

var iconList = {
  "01d": <img src={oneD} alt="Clear Sky"/>,
  "02d": <img src={twoD} alt="Few Clouds"/>,
  "03d": <img src={threeD} alt="Scattered Clouds"/>,
  "04d": <img src={fourD} alt="Broken Clouds"/>,
  "09d": <img src={nineD} alt="Shower Rain"/>,
  "10d": <img src={tenD} alt="Rain"/>,
  "11d": <img src={elevenD} alt="Thunderstorm"/>,
  "13d": <img src={thirteenD} alt="Snow"/>,
  "50d": <img src={fiftyD} alt="Mist"/>,
  "01n": <img src={oneN} alt="Clear Sky"/>,
  "02n": <img src={twoN} alt="Few Clouds"/>,
  "03n": <img src={threeD} alt="Scattered Clouds"/>,
  "04n": <img src={fourD} alt="Broken Clouds"/>,
  "09n": <img src={nineD} alt="Shower Rain"/>,
  "10n": <img src={tenD} alt="Rain"/>,
  "11n": <img src={elevenD} alt="Thunderstorm"/>,
  "13n": <img src={thirteenD} alt="Snow"/>,
  "50n": <img src={fiftyD} alt="Mist"/>,
}

class IndexPage extends React.Component {
  constructor() {
    super()
    this.getWeatherInfo = this.getWeatherInfo.bind(this)
    this.state = {
      zipcode: 92606,
      data: null,
      weeklyData: null
    }
  }
  
  componentDidMount() {
    this.getWeatherInfo();
  }

  getWeatherInfo() {
    fetch(`/api/weather?zipcode=${this.state.zipcode}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      this.setState({
        data: data
      })
      console.log(data)
    });

    fetch(`/api/weekly?zipcode=${this.state.zipcode}`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
      this.setState({
        weeklyData: data
      })
      console.log(data)
    });
  }

  render() {

    return (
      this.state.data && this.state.weeklyData ? 
      <div className="layout">
        <CurrentForecast className="currentForecast" data={this.state.data} d={d} days={days} iconList={iconList}/>
        
        <div className="weekForecast">
          <h2 className="title" id="weekForecastTitle">This Week</h2>
          <WeekForecast idName="dayOne" icon={iconList[this.state.weeklyData.list[3].weather[0].icon]}/>
          <WeekForecast idName="dayTwo" icon={iconList[this.state.weeklyData.list[11].weather[0].icon]}/>
          <WeekForecast idName="dayThree" icon={iconList[this.state.weeklyData.list[19].weather[0].icon]}/>
          <WeekForecast idName="dayFour" icon={iconList[this.state.weeklyData.list[27].weather[0].icon]}/>
          <WeekForecast idName="dayFive" icon={iconList[this.state.weeklyData.list[35].weather[0].icon]}/>
        </div>
        <div className="forecastHighlight">
          <h2 className="title" id="forecastHighlightTitle">Today's Highlights</h2>
          <Highlight idName="windStatus"/>
          <Highlight idName="pressure"/>
          <Highlight idName="visibility"/>
          <Highlight idName="humidity"/>
          <SunHighlight />
        </div>
      </div>
      : null
    );
  }
}

export default IndexPage;
