import React, {useState}  from 'react'

import UnselectedPlayer from './UnselectedPlayer/UnselectedPlayer'

import styles from './UnselectedPlayers.module.scss'

import axios from '../../axios-server'
import { Loader } from '../loader/loader'

import cogoToast from 'cogo-toast';

const UnselectedPlayers = props =>{
    let players = props.players.sort(
        (player1, player2) => (player1.status === player2.status)? 0 : player1.status? -1 : 1
    ).map(player=>
       <UnselectedPlayer 
            key = {player.id}
            player ={player}
            moveUnselectedToRad={props.moveUnselectedToRad}
            moveUnselectedToDire={props.moveUnselectedToDire}
       />
    )
    const [input, setInput] = useState('')
    const [isAdding,setIsAdding] = useState(false)

    let submitHandler = async(event) => {
        if(event.key==="Enter"){
            setIsAdding(true);
            const {data} = await axios.post("/players", {
                steamID: input
            })
            await props.getPlayers();
            setIsAdding(false);
            cogoToast.success(data.msg)
        }
    }

    let changeHandler = event =>{
        setInput(event.target.value)
        console.log(input)
    }

    return(
     
        <div className= {styles.ChatList + " chat_list"}>
            <div className="input-group">
                {isAdding?<Loader msg="adding player"></Loader>:<input type="text" className="form-control"  placeholder="Add players" onKeyPress={submitHandler} onChange={changeHandler} required />}

            </div>
            <ul className="user_list list-unstyled mb-0 mt-3">
               
                {players}

            </ul>
        </div>
    )
}

export default UnselectedPlayers 