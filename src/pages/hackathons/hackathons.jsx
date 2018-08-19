import React from 'react';
import { Layout } from 'antd';
import { inject, observer } from 'mobx-react';

@inject('hackathonStore')
@observer
class Hackathons extends React.Component {
  constructor() {
    super();
  }

  render() {
    const { hackathonStore } = this.props;
    hackathonStore.init();
    return (
      <div className="Hackathons">
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
        test <br />
      </div>
    );
  }
}

export default Hackathons;
