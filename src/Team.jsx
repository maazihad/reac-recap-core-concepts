import { useState } from "react";

const Team = () => {
   const [team, setTeam] = useState(0);

   const handlePlayers = () => {
      const newPlayerAdd = team + 1;
      setTeam(newPlayerAdd);
   };
   const removePlayer = () => {
      setTeam(team - 1);
   };

   const teamStyle = {
      margin: "10px 20px",
      border: "10px solid purple",
      borderRadius: "15px",
      backgroundColor: "magenta",
      color: "white"
   };

   return (
      <>
         <div style={teamStyle}>
            <h5>Team Member : {team}</h5>
         </div>
         <button onClick={handlePlayers}>Add Player</button>
         <button onClick={removePlayer}>Remove Player</button>
      </>
   );
};

export default Team;