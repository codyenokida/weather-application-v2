import React from 'react'

import styles from './CurrentForecast.module.css'

import SearchBar from 'material-ui-search-bar'

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
        this.state = {
            zipcode: "",
            icon: this.props.data.weather[0].icon,
            description: this.props.data.weather[0].description,
            temp: Math.round((this.props.data.main.temp - 273.15) * 9/5 + 32) + "°F",
            location: this.props.data.name + ", US"
        }
        this.requestZipcode = this.requestZipcode.bind(this)
    }

    requestZipcode() {
        this.props.setZipcode(this.state.zipcode);
        this.setState({
            zipcode: ""
        })
    }

    componentWillReceiveProps(props) {
        this.setState({
            icon: props.data.weather[0].icon,
            description: props.data.weather[0].description,
            temp: Math.round((props.data.main.temp - 273.15) * 9/5 + 32) + "°F",
            location: props.data.name + ", US"
        })
    }

    render() {

        return(
            <div className={styles.currentForecastContainer}>
                <div className={styles.searchBar}>
                    <SearchBar
                        onRequestSearch={() => this.requestZipcode()}
                        style={{
                            margin: '0 auto',
                            maxWidth: 800
                        }}
                        placeholder="Search Zipcode..."
                        value={this.state.zipcode}
                        onChange={(newValue) => this.setState({ zipcode: newValue })}
                    />
                </div>
                <div className={styles.iconContainer}>
                    {this.props.iconList[this.state.icon]}
                </div>
                <div className={styles.currentDetails}>
                    <h1>{this.state.temp}</h1>
                    <h2>{this.state.location}</h2>
                    <p>{this.props.days[this.props.d.getDay()]}, <span>{this.props.d.getHours()}:{ this.props.d.getMinutes() < 10 ? '0' + this.props.d.getMinutes() : this.props.d.getMinutes()}</span></p>
                    <CurrentCondition icon={this.props.iconList[this.state.icon]} description={this.state.description}/>
                </div>
            </div>
        )
    }
}

export default CurrentForecast