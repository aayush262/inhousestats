import React from 'react';
import LeaderboardPlayer from './LeaderboardPlayer/LeaderboardPlayer';
import { Link } from 'react-router-dom';

import axios from '../../axios-server';
import { Loader } from '../loader/loader';

export class Leaderboard extends React.Component {
    constructor() {
        super();
        this.state = {
            players: [],
            isSorting: false,
            isDesc: false
        }
    }

    componentDidMount() {
        this.setState(() => {
            return {
                isLoading: true
            }
        }, async () => {
            const { data } = await axios.get('/players')
            const players = data.data;
            players.sort((a, b) => {
                return b.wins - a.wins;
            })
            this.setState({
                players,
                isLoading: false
            })
        })
    }

    pointsHandler = () => {
        this.setState((prevState) => {
            return {
                isSorting: true,
                isDesc: !prevState.isDesc
            }
        }, () => {
            const players = this.state.players;
            players.sort((a, b) => {
                return this.state.isDesc? a.wins-b.wins : b.wins-a.wins
            })
            this.setState({
                players,
                isSorting: false
            })
        })
    }
     
    gamesHandler =() => {
        this.setState((prevState) => {
            return {
                isSorting: true,
                isDesc: !prevState.isDesc
            }
        }, () => {
            const players = this.state.players;
            players.sort((a, b) => {
                return this.state.isDesc? a.games-b.games : b.games-a.games
            })
            this.setState({
                players,
                isSorting: false
            })
        })
    }

    lossHandler =() => {
        this.setState((prevState) => {
            return {
                isSorting: true,
                isDesc: !prevState.isDesc
            }
        }, () => {
            const players = this.state.players;
            players.sort((a, b) => {
                const aloss = a.games-a.wins;
                const bloss = b.games -b.wins;
                return this.state.isDesc? aloss-bloss : bloss-aloss
            })
            this.setState({
                players,
                isSorting: false
            })
        })
    }

    namesHandler  =() => {
        this.setState((prevState) => {
            return {
                isSorting: true,
                isDesc: !prevState.isDesc
            }
        }, () => {
            const players = this.state.players;
            players.sort((a, b) => {
                let fa = a.name.toLowerCase(),
                fb = b.name.toLowerCase();
        
            if (fa < fb) {
               return this.state.isDesc? -1: 1;
            }
            if (fa > fb) {
                return this.state.isDesc? 1: -1;
            }
            return 0;
            })
            this.setState({
                players,
                isSorting: false
            })
        })
    }

    render() {
        let players = this.state.players.map((player, index) =>
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
                <section className="content" style={{ margin: '20px 250px 20px 250px' }}>
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
                                        {this.state.isLoading ? <Loader msg="fetching data"></Loader> :
                                            <div className="body">
                                                <div className="table-responsive">
                                                    <table className="table m-b-0 table-striped table-dark">
                                                        {this.state.isSorting ? <Loader msg="Sorting..."></Loader> :
                                                            <thead>
                                                                <tr>
                                                                    <th scope="col">#</th>
                                                                    <th style={{ cursor: 'pointer' }} onClick={this.namesHandler} scope="col">Player</th>
                                                                    <th style={{ cursor: 'pointer' }} onClick={this.pointsHandler} scope="col">Wins</th>
                                                                    <th style={{ cursor: 'pointer' }} onClick={this.lossHandler} scope="col">Loss</th>
                                                                    <th  style={{ cursor: 'pointer' }} onClick={this.gamesHandler} scope="col">Games Played</th>
                                                                    <th style={{ cursor: 'pointer' }} onClick={this.pointsHandler} scope="col">Points</th>
                                                                </tr>
                                                            </thead>
                                                        }
                                                        <tbody>
                                                            {players}
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>}
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