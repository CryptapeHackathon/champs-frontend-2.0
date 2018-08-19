import { Button, Input, Layout, Menu } from 'antd';
import React, { Component } from 'react';
import 'antd/dist/antd.css';
import './nav.css';
const { Search } = Input;
const { Header, Content, Footer, Sider } = Layout;

class NavBar extends Component {
  state = {
    collapsed: false,
    mode: 'inline'
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <Header div style={{ zIndex: 1, width: '100%' }}>
          <span style={{ color: '#fff', paddingLeft: '0', fontSize: '1.4em' }}>
            线上自治黑客松平台 （<b>D</b>
            ecentralized <b>H</b>
            ackathon <b>A</b>
            utonomous <b>P</b>
            latform）
          </span>

          <span
            style={{
              color: '#fff',
              fontSize: '1.4em',
              display: 'block',
              float: 'right'
            }}
          >
            <Button>我要发起</Button>
            <Search
              style={{ marginLeft: '2%', width: '50%' }}
              placeholder="项目名"
              onSearch={value => console.log(value)}
              enterButton="搜索"
            />
          </span>
        </Header>
      </Layout>
    );
  }
}
export default NavBar;
