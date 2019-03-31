// @flow

// First include all the react
import * as React from 'react';
import ReactDOM from 'react-dom';
import 'materialize-css/dist/js/materialize.min.js';
import './styles/index.scss';

// Include the main router
import Router from './routes/Router.jsx';

// $FlowFixMe Render the router
ReactDOM.render(React.createElement(Router), document.getElementById('root'));
