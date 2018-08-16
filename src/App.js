import React, { Component } from 'react';
import { Provider } from 'mobx-react';

import './App.css';
import Router from './router.jsx';
import stores from './stores';

export default class App extends Component {
  render() {
    return (
      <Provider {...stores}>
        <Router />
      </Provider>
    );
  }
}
