import React, { Component } from 'react';
import {
  BrowserRouter,
  Route,
  Link,
  Switch,
  withRouter
} from 'react-router-dom';

// layout
import Layout from './layout';

// pages
import Index from './pages/index';
import Hackathons from './pages/hackathons/hackathons';

const Main = withRouter(props => <Layout {...props} />);

class Router extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <BrowserRouter>
        <Main>
          <Switch>
            <Route path="/hackathons" component={Hackathons} />
            <Route path="/" component={Index} />
          </Switch>
        </Main>
      </BrowserRouter>
    );
  }
}

export default Router;
