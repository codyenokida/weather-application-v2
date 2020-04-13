import React from 'react'

import styles from "./WeekForecast.module.css"

class WeekForecast extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div className={styles.weekForecastContainer} id={styles[this.props.idName]}>
                <h2>Tue</h2>
                {this.props.icon}
                <p>100</p>
            </div>
        )
    }
}

export default WeekForecast