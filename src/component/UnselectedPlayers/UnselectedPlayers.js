import React, {useState}  from 'react'

import UnselectedPlayer from './UnselectedPlayer/UnselectedPlayer'

import styles from './UnselectedPlayers.module.scss'

import axios from '../../axios-server'

const UnselectedPlayers = props =>{
    let players = props.players.map(player=>
       <UnselectedPlayer 
            key = {player.id}
            player ={player}
            moveUnselectedToRad={props.moveUnselectedToRad}
            moveUnselectedToDire={props.moveUnselectedToDire}
       />
    )
    const [input, setInput] = useState('') 

    let submitHandler = (event) => {
        if(event.key==="Enter"){
            axios.post("/players", {
                steamID: input
            })
        }
    }

    let changeHandler = event =>{
        setInput(event.target.value)
        console.log(input)
    }

    return(
     
        <div className= {styles.ChatList + " chat_list"}>
            <div className="input-group">

                <input type="text" className="form-control"  placeholder="Add players" onKeyPress={submitHandler} onChange={changeHandler} required />

            </div>
            <ul className="user_list list-unstyled mb-0 mt-3">
               
                {players}

            </ul>
        </div>
    )
}

export default UnselectedPlayers 