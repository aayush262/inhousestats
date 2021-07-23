import React from 'react';

import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'; 
import { LandingPage } from './component/LandingPage';
import { Leaderboard } from './component/leaderboard';
import { Lobby } from './component/lobby';

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Switch>
                <Route exact path='/admin' component={Lobby}></Route>
                <Route exact path='/leaderboard' component={Leaderboard}></Route>
                <Route exact path = '/' component={LandingPage}></Route>
                </Switch>
                
            </Router>
        </>
    )
}

export default AppRoutes;