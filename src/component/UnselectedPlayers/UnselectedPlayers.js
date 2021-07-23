import React from 'react'
import UnselectedPlayer from './UnselectedPlayer/UnselectedPlayer'

import styles from './UnselectedPlayers.module.scss'

const unselectedPlayers = props =>{
    let players = props.players.map(player=>
       <UnselectedPlayer 
            key = {player.id}
            player ={player}
            moveUnselectedToRad={props.moveUnselectedToRad}
            moveUnselectedToDire={props.moveUnselectedToDire}
       />
    )
    
    return(
     
        <div className= {styles.ChatList + " chat_list"}>
            <div className="input-group">

                <input type="text" className="form-control" placeholder="Add players" required />

            </div>
            <ul className="user_list list-unstyled mb-0 mt-3">
               
                {players}

            </ul>
        </div>
    )
}

export default unselectedPlayers 