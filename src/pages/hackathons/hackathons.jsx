import React from 'react';
import { Layout } from 'antd';
import { inject, observer } from 'mobx-react';
import axios from 'axios';
import HackathonThumbnailCrowdfunding from './hackathonThumbnailCrowdfunding';

@inject('hackathonStore')
@observer
class Hackathons extends React.Component {
  constructor() {
    super();
  }

  componentWillMount() {
    console.log('Hackathons.jsx componentWillMount get called..');
    const { hackathonStore } = this.props;
    hackathonStore.init();
  }

  render() {
    const { hackathonStore } = this.props;
    var hackathons = [];

    var elements = hackathonStore.hackathons.map((x, i) => {
      return <HackathonThumbnailCrowdfunding key={x.hackathonId} {...x} />;
    });

    return (
      <div className="Hackathons">
        <ul>{elements}</ul>
      </div>
    );
  }
}

export default Hackathons;
