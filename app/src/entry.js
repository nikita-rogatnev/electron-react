import React from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';

import App from './components/app/app';

ReactDOM.render(
    <App/>,
    document.body.appendChild(
        document.createElement('main')
    )
);
