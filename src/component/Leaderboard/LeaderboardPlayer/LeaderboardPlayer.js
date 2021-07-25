import React from 'react'


const leaderboardPlayer = props =>{
    console.log('props',props)

    return(
        <tr>
            <th scope="row">{props.index }</th>
            <td>
                <img src={props.image} alt="avatar" className="mr-2" />
                {props.name}
            </td>
            <td>{props.wins}</td>
            <td>{props.gamesPlayed-props.wins}</td>
            <td>{props.gamesPlayed}</td>
            <td>{props.wins*3 + props.gamesPlayed}</td>
        </tr>
    )
}

export default leaderboardPlayer