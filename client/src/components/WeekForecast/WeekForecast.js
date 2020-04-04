import React from 'react'

import styles from "./WeekForecast.module.css"

class WeekForecast extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {

        return(
            <div className={styles.weekForecastContainer} id={styles[this.props.idName]}>
                
            </div>
        )
    }
}

export default WeekForecast