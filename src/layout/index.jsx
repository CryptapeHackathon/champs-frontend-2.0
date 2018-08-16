import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Header from './header';
import Foot from './foot';

@observer
export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Header />
        <div>{this.props.children}</div>
        <Foot />
      </div>
    );
  }
}
