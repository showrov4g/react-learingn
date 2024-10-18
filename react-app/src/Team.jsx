import { useState } from "react"

export default function Team(){
    const [team, setTeam]= useState(11);

    const handleAdd =() =>{
        const newTeamMember = team+1;
        setTeam(newTeamMember);
    }
    const handleRemove =()=>{
        const newTeam = team -1;
        setTeam(newTeam)
    }
    const teamStyle = {
        border: "2px solid green",
        margin: '15px',
        padding: "10px",
        borderRadius: '15px'
    }

    return(
        <div style={teamStyle}>
            <h3>Players: {team}</h3>
            <button onClick={handleAdd}>Add Players</button>
            <button onClick={handleRemove}>Remove Player</button>
        </div>
    )
}