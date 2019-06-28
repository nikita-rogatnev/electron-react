import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Highlight from '@material-ui/icons/Highlight';

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            theme: localStorage.theme || 'dark',
        }
    }

    switchTheme = () => {
        const themeCurrent = this.state.theme;
        const themeUpdated = themeCurrent === `dark` ? `light` : `dark`;

        this.setState({theme: themeUpdated});
        localStorage.theme = themeUpdated;
    };

    render() {
        return (
            <section className="app" data-theme={this.state.theme}>
                <h1>Electron React {this.state.theme}</h1>

                <IconButton
                    aria-label="Switch theme"
                    onClick={this.switchTheme}
                >
                    <Highlight/>
                </IconButton>
            </section>
        );
    }
}

export default App;
