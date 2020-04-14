import React from 'react';

import styles from "./SunHighlight.module.css"

class SunHighlight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className={styles.sunHighlightContainer}>
                <h2>{this.props.title}</h2>
            </div>
        )
    }
}

export default SunHighlight