import React, { Component } from 'react';
import { Layout } from 'antd';
const { Footer } = Layout;

export default class Foot extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <Footer style={{ textAlign: 'center' }}>
          Decentralized Hackathon Autonomous Platform ©2018 Created by Cryptape
        </Footer>
      </div>
    );
  }
}
