import React from 'react'


const unselectedPlayer = props =>{
 
    return(
        <li>
            <img src={props.player.image} alt="avatar" />
            <div className="about mr-auto">
                <div className="name">{props.player.name}</div>
                <div className={`status ${props.player.status?'online':''}`}><i className="zmdi zmdi-circle" /></div>
            </div>
            <button className="btn btn-success" onClick = {props.moveUnselectedToRad.bind(this, props.player.id)}>R</button>
            <button className="btn btn-danger" onClick = {props.moveUnselectedToDire.bind(this, props.player.id)}>D</button>
        </li>  
    )
}

export default unselectedPlayer