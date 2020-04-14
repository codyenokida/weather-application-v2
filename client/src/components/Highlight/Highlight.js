import React from 'react';

import styles from "./Highlight.module.css"

class Highlight extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    render() {
        return(
            <div className={styles.highlightContainer}>
                <h2>{this.props.title}</h2>
                <p>{this.props.stat}<span>{this.props.unit}</span></p>
                <div className={styles.description}>
                    {this.props.children}
                </div>
            </div>
        )
    }
}

export default Highlight