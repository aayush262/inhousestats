import React from 'react'
import SelectedPlayer from './SelectedPlayer/SelectedPlayer'

const selectedPlayers = props =>{
    let players = props.players.map((player,index)=>
        <SelectedPlayer key={player.id} player={player} index={index} unselectPlayer={props.unselectPlayer}/>
    )

    let tableHeader;

    if (props.radiant) 
        tableHeader = "thead-light"
    else
        tableHeader = "thead-dark"
    
    return(
     
        <div className="table-responsive">
            <table className="table m-b-0">
                <thead className={tableHeader}>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Player Profle</th>

                    </tr>
                </thead>
                <tbody>
                 
                    {players}
                </tbody>
            </table>
        </div>
    )
}

export default selectedPlayers 
