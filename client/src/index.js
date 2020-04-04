import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import IndexPage from './App';

import CurrentForecast from "./components/CurrentForecast/CurrentForecast"

ReactDOM.render(
  <React.StrictMode>
    <IndexPage />
  </React.StrictMode>,
  document.getElementById('root')
);

