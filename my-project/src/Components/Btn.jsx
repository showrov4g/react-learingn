import React, { useState } from 'react';

const AvailablePlayers = () => {
  const [isAvailable, setIsAvailable] = useState(true);

  const handleToggle = () => {
    setIsAvailable(!isAvailable);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <h2>Available Players</h2>
      <div style={{ marginLeft: '10px', display: 'flex', borderRadius: '5px', overflow: 'hidden' }}>
        <button
          onClick={() => setIsAvailable(true)}
          style={{
            padding: '8px 16px',
            backgroundColor: isAvailable ? '#FFFF00' : '#f0f0f0', // yellow for active state
            color: isAvailable ? '#000' : '#888',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Available
        </button>
        <button
          onClick={() => setIsAvailable(false)}
          style={{
            padding: '8px 16px',
            backgroundColor: !isAvailable ? '#FFFF00' : '#f0f0f0', // yellow for active state
            color: !isAvailable ? '#000' : '#888',
            border: 'none',
            cursor: 'pointer',
          }}
        >
          Selected (0)
        </button>
      </div>
    </div>
  );
};

export default AvailablePlayers;
