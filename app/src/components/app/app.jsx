import React from 'react';

class App extends React.Component {
    componentDidMount() {
        document.documentElement.setAttribute(
            'data-theme',
            localStorage.theme || 'dark'
        );

        let html = document.documentElement;

        document.addEventListener('click', (e) => {
            let {target} = e;
            let newTheme = target.getAttribute('data-set-theme');

            if (newTheme) {
                html.setAttribute('data-theme', newTheme);
                localStorage.theme = newTheme
            }
        })
    }

    render() {
        return (
            <section className="app">
                <h1>Electron React</h1>
                <button data-set-theme="dark">Dark</button>
                <button data-set-theme="light">Light</button>
            </section>
        );
    }
}

export default App;
