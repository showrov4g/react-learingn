import React, { useState } from "react";

// Sample data for players
const playersData = [
  {
    id: 1,
    name: "Virat Kohli",
    country: "India",
    role: "Batsman",
    price: 200000,
  },
  {
    id: 2,
    name: "David Warner",
    country: "Australia",
    role: "Batsman",
    price: 150000,
  },
  {
    id: 3,
    name: "Babar Azam",
    country: "Pakistan",
    role: "Batsman",
    price: 180000,
  },
  {
    id: 4,
    name: "Ben Stokes",
    country: "England",
    role: "All-rounder",
    price: 160000,
  },
  {
    id: 5,
    name: "Kane Williamson",
    country: "New Zealand",
    role: "Batsman",
    price: 190000,
  },
  {
    id: 6,
    name: "Quinton de Kock",
    country: "South Africa",
    role: "Wicketkeeper",
    price: 140000,
  },
];

const AvailablePlayers = () => {
  const [isAvailableView, setIsAvailableView] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleToggleView = () => {
    setIsAvailableView(!isAvailableView);
  };

  const handleSelectPlayer = (player) => {
    setSelectedPlayers((prevSelected) => {
      if (prevSelected.some((p) => p.id === player.id)) {
        // Deselect player if already selected
        return prevSelected.filter((p) => p.id !== player.id);
      } else {
        // Select player
        return [...prevSelected, player];
      }
    });
  };

  // Filtered list based on view
  const displayedPlayers = isAvailableView ? playersData : selectedPlayers;

  return (
    <div>
      <h2>Available Players</h2>
      <div style={{ display: "flex", marginBottom: "20px" }}>
        <button
          onClick={() => setIsAvailableView(true)}
          style={{
            padding: "10px 20px",
            backgroundColor: isAvailableView ? "#FFFF00" : "#f0f0f0",
            color: isAvailableView ? "#000" : "#888",
            border: "none",
            cursor: "pointer",
            marginRight: "10px",
            borderRadius: "5px",
          }}
        >
          Available
        </button>
        <button
          onClick={() => setIsAvailableView(false)}
          style={{
            padding: "10px 20px",
            backgroundColor: !isAvailableView ? "#FFFF00" : "#f0f0f0",
            color: !isAvailableView ? "#000" : "#888",
            border: "none",
            cursor: "pointer",
            borderRadius: "5px",
          }}
        >
          Selected ({selectedPlayers.length}/6)
        </button>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {displayedPlayers.map((player) => (
          <div key={player.id}>
            <h3>{player.name}</h3>
            <p>{player.country}</p>
            <p>Role: {player.role}</p>
            <p>Price: ${player.price}</p>
            <button
              onClick={() => handleSelectPlayer(player)}
              style={{
                padding: "8px 16px",
                backgroundColor: selectedPlayers.some((p) => p.id === player.id)
                  ? "#FFEB3B"
                  : "#00C853",
                color: "#000",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                marginTop: "10px",
              }}
            >
              {selectedPlayers.some((p) => p.id === player.id)
                ? "Deselect Player"
                : "Choose Player"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailablePlayers;
