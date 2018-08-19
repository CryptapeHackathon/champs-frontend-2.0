import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Button from 'antd/lib/button';
import NavBar from './nav/nav';

@inject('userStore')
@observer
export default class Header extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <NavBar />
        header
        <Button type="primary">primary button</Button>
      </div>
    );
  }
}
