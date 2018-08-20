import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';

import Header from './header';
import Foot from './foot';
import { Layout as AntLayout } from 'antd';
const { Content } = AntLayout;

@observer
export default class Layout extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="main">
        <Header />
        <Content
          className="content"
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '#fff',
            minHeight: 280
          }}
        >
          <AntLayout>{this.props.children}</AntLayout>
        </Content>
        <Foot className="footer" />
      </div>
    );
  }
}
