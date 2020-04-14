import React from 'react'

import styles from "./WeekForecast.module.css"

class WeekForecast extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div className={styles.weekForecastContainer} id={styles[this.props.idName]}>
                <h2>{this.props.date}</h2>
                {this.props.icon}
                <p>{Math.round((this.props.high - 273.15) * 9/5 + 32) + "°F"} <span>{Math.round((this.props.low - 273.15) * 9/5 + 32) + "°F"}</span></p>
            </div>
        )
    }
}

export default WeekForecast