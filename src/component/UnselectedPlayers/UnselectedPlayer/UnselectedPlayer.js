import React from 'react'


const unselectedPlayer = props =>{
    let status;       
    if (props.player.status)
        status = <i className="zmdi zmdi-circle" />
    else
        status = <i className="zmdi zmdi-circle" />

    
    return(
        <li>
            <img src={props.player.image} alt="avatar" />
            <div className="about mr-auto">
                <div className="name">{props.player.name}</div>
                <div className="status online">{status}</div>
            </div>
            <button className="btn btn-success" onClick = {props.moveUnselectedToRad.bind(this, props.player.id)}>R</button>
            <button className="btn btn-danger" onClick = {props.moveUnselectedToDire.bind(this, props.player.id)}>D</button>
        </li>  
    )
}

export default unselectedPlayer