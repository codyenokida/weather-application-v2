import React from 'react'

import styles from './CurrentForecast.module.css'

const CurrentCondition = ({icon, description}) => {
    return(
        <div className={styles.currentCondition}>
            {icon}
            <p>{description}</p>
        </div>
    )
} 

class CurrentForecast extends React.Component {
    constructor(props) {
        super(props)
        this.icon = this.props.data.weather[0].icon
        this.description = this.props.data.weather[0].description
        this.temp = Math.round((this.props.data.main.temp - 273.15) * 9/5 + 32) + "°F"
        this.location = this.props.data.name + ", US"
    }

    render() {

        return(
            <div className={styles.currentForecastContainer}>
                <div className={styles.searchBar}>

                </div>
                <div className={styles.iconContainer}>
                    {this.props.iconList[this.icon]}
                </div>
                <div className={styles.currentDetails}>
                    <h1>{this.temp}</h1>
                    <h2>{this.location}</h2>
                    <p>{this.props.days[this.props.d.getDay()]}, <span>{this.props.d.getHours()}:{this.props.d.getMinutes()}</span></p>
                    <CurrentCondition icon={this.props.iconList[this.icon]} description={this.description}/>
                </div>
            </div>
        )
    }
}

export default CurrentForecast