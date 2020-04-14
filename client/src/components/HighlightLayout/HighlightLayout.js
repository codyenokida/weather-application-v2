import React from 'react';

import styles from "./HighlightLayout.module.css"

class HighlightLayout extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className={styles.highlightLayout}>
                <h1>{this.props.title}</h1>
                {this.props.children}
            </div>
        )
    }
}

export default HighlightLayout