import React from 'react'

import styles from './logo.css'

class Logo extends Component.Component {
    render() {
        return <img src={this.props.src} className={styles.logo} alt="test"/>
    }
}

export default Logo;
