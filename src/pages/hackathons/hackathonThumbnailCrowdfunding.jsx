import React from 'react';
import { Card } from 'antd';

class HackathonThumbnailCrowdfunding extends React.Component {
  render() {
    return (
      <Card title={this.props.hackathonName}>
        <p>{this.props.hackathonDesc}</p>
      </Card>
    );
  }
}

export default HackathonThumbnailCrowdfunding;
