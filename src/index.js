import 'babel-polifill';
import React from 'react';
import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
import routes from './routers';
import './styles/styles.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render (
  <Router history={browserHistory} routes={routes} />,
  document.getElementById('app')
);
