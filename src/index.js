import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom"
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Comeuppance from './components/comeuppance';

ReactDOM.render(
  <Router>
    <Comeuppance />
  </Router>
  , document.getElementById('root'));

