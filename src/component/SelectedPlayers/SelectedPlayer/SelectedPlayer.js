import React from 'react'


const unselectedPlayer = props =>{


    return(
        <tr key={props.player.id}>
            <th scope="row">{props.index}</th>
            <td className="d-flex justify-content-between">
                <div>
                    <img src={props.player.image} alt="avatar" className="mr-2" />
                    {props.player.name}
                    <div className={`status ${props.player.status?'online':''} d-inline ml-2`}><i className="zmdi zmdi-circle" /></div>
                </div>
                <button className="btn btn-danger" onClick={props.unselectPlayer.bind(this, props.player.id)}>X</button>
            </td>
        </tr>
    )
}

export default unselectedPlayer