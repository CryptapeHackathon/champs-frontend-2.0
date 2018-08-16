import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

@inject('userStore')
@observer
export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return <div>header</div>;
  }
}
