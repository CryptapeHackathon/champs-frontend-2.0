import React from 'react';
import { Router, Route, Switch } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory';
// import SamplePage from './components/SamplePage.jsx';
// import SamplePage1 from './components/SamplePage1.jsx';
import Welcome from './pages/welcome';

const history = createBrowserHistory()

class Routes extends React.Component {
    render() {
        return (
            <div>
                <Router history={history}>
                    <Switch>
                        <Route path='/welcome' component={Welcome}></Route>
                        {/* <Route path='/sp2' component={SamplePage1}></Route> */}
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default Routes;