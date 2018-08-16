import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import { Button } from 'antd';

@inject('userStore')
@observer
export default class Index extends Component {
  onClickInit(e) {
    this.props.userStore.init().then(() => console.log('init user'));
  }

  render() {
    const { userStore } = this.props;
    const { address, name } = userStore;

    return (
      <div className="App">
        content
        <br />
        <header className="App-header">
          <h1 className="App-title">
            address:
            {address}
            name:
            {name}
          </h1>
        </header>
        <Button type="primary" onClick={e => this.onClickInit(e)}>
          Init
        </Button>
      </div>
    );
  }
}
