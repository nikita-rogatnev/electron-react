import React from 'react'
import {HashRouter, Route, Link} from 'react-router-dom';

import Intro from '../intro/intro'
import About from '../about/about'

class App extends React.Component {
    render() {
        return (
            <HashRouter>
                <nav>
                    <Link to="/">Home</Link>
                    <Link to="/about/">About</Link>
                </nav>

                <Route path="/" exact component={Intro}/>
                <Route path="/about/" component={About}/>
            </HashRouter>
        )
    }
}

export default App;
