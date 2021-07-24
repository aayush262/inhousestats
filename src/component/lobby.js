import React from 'react'
import { Link } from 'react-router-dom';

import UnselectedPlayers  from './UnselectedPlayers/UnselectedPlayers'
import SelectedPlayers from './SelectedPlayers/SelectedPlayers';

import style from './lobby.module.scss'

import axios from '../axios-server';

export class Lobby extends React.Component {

    constructor() {
        super();

        axios.get(`/players`).then(res=>console.log(res))

        this.state = {
            isGameStarted: false,
            isGameReady: false,
            radPlayers: [],
            direPlayers: [],
            unselectedPlayers: [
                {
                    id: 1,
                    image: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/32/32ae6e98876f1ce90f87bb639b0a3ac780e2d046.jpg",
                    name: ";/ (y)",
                    status: true
                },
                {
                    id: 2,
                    image: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/59/597471d990ad1cb07af4e5104ea324b982ea123c.jpg",
                    name: "bobby",
                    status: true
                },
                {
                    id: 3,
                    image: "https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a8/a8091fa7e1c73cf1289ef49f74e105e0c0f5562f.jpg",
                    name: "invis - Kuroko",
                    status: false
                }
            ]
        }
    }

    startHandler=()=>{
        this.setState({
            isGameStarted: true
        })
    }
  
    moveUnselectedToRad = (id) => {
        if (this.state.radPlayers.length >= 5){
            console.error("Radiant players full")
            return
        }
        let selectedPlayer = this.state.unselectedPlayers.find(player=>player.id===id);
        this.setState({unselectedPlayers: [...this.state.unselectedPlayers.filter(player=>player.id!==id)]})
        this.setState({radPlayers:[...this.state.radPlayers, selectedPlayer]});
        if (this.state.radPlayers.length === 5  && this.state.direPlayers.length === 5){
            this.setState({isGameReady: true})
        }
    }
    
    moveUnselectedToDire = (id) => {
        if (this.state.direPlayers.length >= 5){
            console.error("Dire players full")
            return
        }
        let selectedPlayer = this.state.unselectedPlayers.find(player=>player.id===id);
        this.setState({unselectedPlayers: [...this.state.unselectedPlayers.filter(player=>player.id!==id)]})
        this.setState({direPlayers:[...this.state.direPlayers, selectedPlayer]});
        if (this.state.radPlayers.length === 5  && this.state.direPlayers.length === 5){
            this.setState({isGameReady: true})
        }
    }

    unselectPlayerFromRad = (id) => {
        let unselectedPlayer = this.state.radPlayers.find(player=>player.id===id);
        this.setState({radPlayers: [...this.state.radPlayers.filter(player=>player.id!==id)]})
        this.setState({unselectedPlayers:[...this.state.unselectedPlayers, unselectedPlayer]});
        this.setState({isGameReady: false})
    }
    
    unselectPlayerFromDire = (id) => {
        let unselectedPlayer = this.state.direPlayers.find(player=>player.id===id);
        this.setState({direPlayers: [...this.state.direPlayers.filter(player=>player.id!==id)]})
        this.setState({unselectedPlayers:[...this.state.unselectedPlayers, unselectedPlayer]});
        this.setState({isGameReady: false})
    }



    render() {

        
        return (
            <>
                <div className="body_scroll">
                    <div className="block-header">
                        <div className="row">
                            <div className="col-lg-7 col-md-6 col-sm-12">
                                <h2>Dota2 Stats</h2>
                                <ul className="breadcrumb">
                                    <li className="breadcrumb-item"><Link to="/" ><i className="zmdi zmdi-home" /> InhouseStat</Link></li>

                                    <li className="breadcrumb-item active">Lobby Recorder</li>
                                </ul>
                                <button className="btn btn-primary btn-icon mobile_menu" type="button"><i className="zmdi zmdi-sort-amount-desc" /></button>
                            </div>
                            <div className="col-lg-5 col-md-6 col-sm-12">
                                <button className="btn btn-primary btn-icon float-right right_icon_toggle_btn" type="button"><i className="zmdi zmdi-arrow-right" /></button>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row clearfix">
                            <div className="col-lg-12">
                                <div className="card">
                                    <UnselectedPlayers players = {this.state.unselectedPlayers} moveUnselectedToRad= {this.moveUnselectedToRad} moveUnselectedToDire= {this.moveUnselectedToDire}/>
                                    <div className={"chat_window body " + style.ChatWindow}> 
                                            <>
                                                    <div className = "d-flex justify-content-center">
                                                        <button onClick={this.startHandler} className="btn btn-success" disabled={!this.state.isGameReady}> Start Game!!!</button>
                                                    </div>
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            <div className="card">
                                                                <div className="header">
                                                                    <h2><strong>Radiant</strong> <small>players </small></h2>
                                                                </div>
                                                                <div className="body">
                                                                    <SelectedPlayers players = {this.state.radPlayers} radiant={true} unselectPlayer = {this.unselectPlayerFromRad}/>
                                                                </div>
                                                            </div>
                                                            <div className = "d-flex justify-content-center">
                                                                <button onClick={this.radiantVictoryHandler} className="btn btn-success" disabled={!this.state.isGameStarted}> Radiant Victory</button>
                                                            </div>
                                                        </div>


                                                        <div className="col-lg-6 col-md-12 col-sm-12">
                                                            <div className="card">
                                                                <div className="header">
                                                                    <h2><strong>Dire</strong><small>players</small></h2>

                                                                </div>
                                                                <div className="body">
                                                                    <SelectedPlayers players = {this.state.direPlayers} radiant={false} unselectPlayer = {this.unselectPlayerFromDire}/>
                                                                </div>
                                                            </div>
                                                            <div className = "d-flex justify-content-center">
                                                                <button onClick={this.dirtVictoryHandler} className="btn btn-danger" disabled={!this.state.isGameStarted}> Dire Victory</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                            </>
                                           
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }

}