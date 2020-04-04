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
            <div className={styles.highlightContainer} id={styles[this.props.idName]}>

            </div>
        )
    }
}

export default Highlight