import React from 'react';

import { BrowserRouter as Router, Route, Link,Switch } from 'react-router-dom'; 
import { Leaderboard } from './component/leaderboard';
import { Lobby } from './component/lobby';

const AppRoutes = () => {
    return (
        <>
            <Router>
                <Switch>
                <Route exact path='/admin' component={Lobby}></Route>
                <Route exact path='/leaderboard' component={Leaderboard}></Route>
                <Route exact path = '/' component={()=>(<>
                        <Link to='/admin'>GO TO ADMIN</Link>
                        <Link to ='/leaderboard'>GO TO LEADERBOARD</Link>
                    </>)}></Route>
                </Switch>
                
            </Router>
        </>
    )
}

export default AppRoutes;