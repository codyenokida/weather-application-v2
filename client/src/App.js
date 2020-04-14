import React from 'react';

import CurrentForecast from "./components/CurrentForecast/CurrentForecast"
import HighlightLayout from "./components/HighlightLayout/HighlightLayout"
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

class IndexPage extends React.Component {
  constructor() {
    super()
    this.state = {
      zipcode: 92606,
      data: null,
      weeklyData: null
    }
    this.getWeatherInfo = this.getWeatherInfo.bind(this)
    this.setZipcode = this.setZipcode.bind(this)
  }
  
  componentDidMount() {
    this.getWeatherInfo();
  }

  setZipcode(zipcode) {
    var zipCodePattern = /(^\d{5}$)|(^\d{5}-\d{4}$)/;
    if (zipCodePattern.test(zipcode)) {
      this.setState({
        zipcode: zipcode
      },
      () => this.getWeatherInfo()
      )
    }
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

    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    var dayDict = {
      0: 'Sun',
      1: 'Mon',
      2: 'Tue',
      3: 'Wed',
      4: 'Thu',
      5: 'Fri',
      6: 'Sat',
    }

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
        
    return (
      this.state.data && this.state.weeklyData ? 
      <div className="layout">
        <CurrentForecast className="currentForecast" data={this.state.data} d={d} days={days} iconList={iconList} setZipcode={this.setZipcode}/>

        <HighlightLayout title="This Week">
          <div className="forecastContainer">
            <WeekForecast 
              date={dayDict[d.getDay() + 1 < 7 ? d.getDay() + 1 : d.getDay() - 6]} 
              icon={iconList[this.state.weeklyData.list[6].weather[0].icon]}
              high={this.state.weeklyData.list[6].main.temp_max}
              low={this.state.weeklyData.list[6].main.temp_min}/>
            <WeekForecast 
              date={dayDict[d.getDay() + 2 < 7 ? d.getDay() + 2 : d.getDay() - 5]} 
              icon={iconList[this.state.weeklyData.list[14].weather[0].icon]}
              high={this.state.weeklyData.list[14].main.temp_max}
              low={this.state.weeklyData.list[14].main.temp_min}/>
            <WeekForecast 
              date={dayDict[d.getDay() + 3 < 7 ? d.getDay() + 3 : d.getDay() - 4]} 
              icon={iconList[this.state.weeklyData.list[22].weather[0].icon]}
              high={this.state.weeklyData.list[22].main.temp_max}
              low={this.state.weeklyData.list[22].main.temp_min}/>
            <WeekForecast 
              date={dayDict[d.getDay() + 4 < 7 ? d.getDay() + 4 : d.getDay() - 3]} 
              icon={iconList[this.state.weeklyData.list[30].weather[0].icon]}
              high={this.state.weeklyData.list[30].main.temp_max}
              low={this.state.weeklyData.list[30].main.temp_min}/>
            <WeekForecast 
              date={dayDict[d.getDay() + 5 < 7 ? d.getDay() + 5 : d.getDay() - 2]} 
              icon={iconList[this.state.weeklyData.list[38].weather[0].icon]}
              high={this.state.weeklyData.list[38].main.temp_max}
              low={this.state.weeklyData.list[38].main.temp_min}/>
          </div>
        </HighlightLayout>

        <HighlightLayout title="Today's Highlights">

        </HighlightLayout>
      
      </div>
      : null
    );
  }
}

export default IndexPage;
