import React from 'react';
import LeaderboardPlayer  from './LeaderboardPlayer/LeaderboardPlayer';
import { Link } from 'react-router-dom';

import axios from '../../axios-server';

export class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            players: []
        }
    }

    componentDidMount(){
        axios.get('/players').then(res=>{
            console.log(res.data.data)
            this.setState({players: res.data.data})
        })

    }

    render() {
        let players = this.state.players.map((player, index)=>
            <LeaderboardPlayer 
                key={player.id}
                name={player.name}
                wins={player.wins}
                gamesPlayed={player.games}
                index={index + 1}
                status={player.status}
                image={player.image}
            />
        )

        return (
            <>
                <section className="content" style={{margin:'20px 250px 20px 250px'}}>
                    <div className="body_scroll">
                        <div className="block-header">
                            <div className="row">
                                <div className="col-lg-7 col-md-6 col-sm-12">
                                    <h2>Leaderboard</h2>
                                    <ul className="breadcrumb">
                                        <li className="breadcrumb-item"><Link to="/"><i className="zmdi zmdi-home" /> inhouseStat</Link></li>
                                        
                                        <li className="breadcrumb-item active">leaderboard</li>
                                    </ul>
                                    <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc" /></button>
                                </div>
                                
                            </div>
                        </div>
                        <div className="container-fluid">
                            <div className="row clearfix">
                                <div className="col-md-12">
                                    <div className="card">
                                        <div className="header">
                                            <h2><strong>Leaderboard</strong></h2>
                                            
                                        </div>
                                        <div className="body">
                                            <div className="table-responsive">
                                                <table className="table m-b-0 table-striped table-dark">
                                                    <thead>
                                                        <tr>
                                                            <th scope="col">#</th>
                                                            <th scope="col">Player</th>
                                                            <th scope="col">Wins</th>
                                                            <th scope="col">Loss</th>
                                                            <th scope="col">Games Played</th>
                                                            <th scope="col">Points</th>
                                                        </tr>
                                                    </thead>
                                                    <tbody>
                                                       {players}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               
                                  
                                
                            </div>
                        </div>
                    </div>
                </section>
            </>
        )
    }
}