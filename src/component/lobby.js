import React from 'react'
import { Link } from 'react-router-dom';

export class Lobby extends React.Component {

    constructor() {
        super();
        this.state = {
            isGame: false
        }
    }

    clickHandler=()=>{
        this.setState({
            isGame: true
        })
    }
  
    render() {

        console.log(this.state)
        
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
                                    <div className="chat_list">
                                        <div className="input-group">

                                            <input type="text" className="form-control" placeholder="Add players" required />

                                        </div>
                                        <ul className="user_list list-unstyled mb-0 mt-3">
                                            <li>
                                                <a >
                                                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/32/32ae6e98876f1ce90f87bb639b0a3ac780e2d046.jpg" alt="avatar" />
                                                    <div className="about">
                                                        <div className="name">;/ (y)</div>
                                                        <div className="status online"> <i className="zmdi zmdi-circle" /></div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a >
                                                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/59/597471d990ad1cb07af4e5104ea324b982ea123c.jpg" alt="avatar" />
                                                    <div className="about">
                                                        <div className="name">bobby</div>
                                                        <div className="status online"> <i className="zmdi zmdi-circle" /></div>
                                                    </div>
                                                </a>
                                            </li>
                                            <li>
                                                <a >
                                                    <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/a8/a8091fa7e1c73cf1289ef49f74e105e0c0f5562f.jpg" alt="avatar" />
                                                    <div className="about">
                                                        <div className="name">invis - Kuroko</div>
                                                        <div className="status online"> <i className="zmdi zmdi-circle" /></div>
                                                    </div>
                                                </a>
                                            </li>

                                        </ul>
                                    </div>
                                    <div className="chat_window body">
                                    {this.state.isGame ?
                                        <>
                                            

                                                <div className="row">
                                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                                        <div className="card">
                                                            <div className="header">
                                                                <h2><strong>Radiant</strong> <small>payers </small></h2>

                                                            </div>
                                                            <div className="body">
                                                                <div className="table-responsive">
                                                                    <table className="table m-b-0">
                                                                        <thead className="thead-light">
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Player Profle</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th scope="row">1</th>
                                                                                <td>Bot</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">2</th>
                                                                                <td>Bot</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">3</th>
                                                                                <td>Bot</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">4</th>
                                                                                <td>Bot</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">5</th>
                                                                                <td>Bot</td>

                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>


                                                    <div className="col-lg-6 col-md-12 col-sm-12">
                                                        <div className="card">
                                                            <div className="header">
                                                                <h2><strong>Dire</strong><small>players</small></h2>

                                                            </div>
                                                            <div className="body">
                                                                <div className="table-responsive">
                                                                    <table className="table m-b-0">
                                                                        <thead className="thead-dark">
                                                                            <tr>
                                                                                <th scope="col">#</th>
                                                                                <th scope="col">Player Profile</th>

                                                                            </tr>
                                                                        </thead>
                                                                        <tbody>
                                                                            <tr>
                                                                                <th scope="row">1</th>
                                                                                <td> bobby </td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">2</th>
                                                                                <td> invis-kuroko</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">3</th>
                                                                                <td> ;/ (y)</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">4</th>
                                                                                <td>Bot</td>

                                                                            </tr>
                                                                            <tr>
                                                                                <th scope="row">5</th>
                                                                                <td> Bot</td>

                                                                            </tr>
                                                                        </tbody>
                                                                    </table>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                        </>
                                        :
                                        <><button onClick={this.clickHandler} className="btn btn-warning"> Start Game</button></>}
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