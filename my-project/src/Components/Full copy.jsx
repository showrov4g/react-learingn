import React, { useState } from 'react';

// Sample data for players
const playersData = [
  { id: 1, name: 'Virat Kohli', country: 'India', role: 'Batsman', price: 1500000 },
  { id: 2, name: 'Darrell Steward', country: 'India', role: 'All-Rounder', price: 1500000 },
  // Add more players as needed
];

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', padding: '20px' }}>
    <img src="logo.png" alt="Logo" style={{ width: '50px' }} />
    <nav>
      <a href="#">Home</a>
      <a href="#">Fixture</a>
      <a href="#">Teams</a>
      <a href="#">Schedules</a>
    </nav>
    <button style={{ backgroundColor: 'yellow', border: 'none', padding: '10px', borderRadius: '5px' }}>0 Coin</button>
  </header>
);

const Banner = () => (
  <section style={{ textAlign: 'center', padding: '50px', background: 'linear-gradient(to right, #3f2b96, #a8c0ff)' }}>
    <h1>Assemble Your Ultimate Dream 11 Cricket Team</h1>
    <p>Beyond Boundaries Beyond Limits</p>
    <button style={{ backgroundColor: '#FFFF00', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>
      Claim Free Credit
    </button>
  </section>
);

const AvailablePlayers = () => {
  const [isAvailableView, setIsAvailableView] = useState(true);
  const [selectedPlayers, setSelectedPlayers] = useState([]);

  const handleToggleView = () => {
    setIsAvailableView(!isAvailableView);
  };

  const handleSelectPlayer = (player) => {
    setSelectedPlayers((prevSelected) => {
      if (prevSelected.some((p) => p.id === player.id)) {
        return prevSelected.filter((p) => p.id !== player.id); // Deselect if selected
      } else {
        return [...prevSelected, player]; // Select player
      }
    });
  };

  const displayedPlayers = isAvailableView ? playersData : selectedPlayers;

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Available Players</h2>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button
          onClick={() => setIsAvailableView(true)}
          style={{
            padding: '10px 20px',
            backgroundColor: isAvailableView ? '#FFFF00' : '#f0f0f0',
            color: isAvailableView ? '#000' : '#888',
            border: 'none',
            cursor: 'pointer',
            marginRight: '10px',
            borderRadius: '5px',
          }}
        >
          Available
        </button>
        <button
          onClick={() => setIsAvailableView(false)}
          style={{
            padding: '10px 20px',
            backgroundColor: !isAvailableView ? '#FFFF00' : '#f0f0f0',
            color: !isAvailableView ? '#000' : '#888',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '5px',
          }}
        >
          Selected ({selectedPlayers.length}/6)
        </button>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        {displayedPlayers.map((player) => (
          <div key={player.id} style={{
            border: '1px solid #ddd', padding: '15px', borderRadius: '10px', width: '200px',
            display: 'flex', flexDirection: 'column', alignItems: 'center'
          }}>
            <img src="player-placeholder.jpg" alt={player.name} style={{ width: '100%', height: '150px', objectFit: 'cover', marginBottom: '10px' }} />
            <h3>{player.name}</h3>
            <p>{player.country}</p>
            <p>Role: {player.role}</p>
            <p>Price: ${player.price}</p>
            <button
              onClick={() => handleSelectPlayer(player)}
              style={{
                padding: '8px 16px',
                backgroundColor: selectedPlayers.some((p) => p.id === player.id) ? '#FFEB3B' : '#00C853',
                color: '#000',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
                marginTop: '10px',
              }}
            >
              {selectedPlayers.some((p) => p.id === player.id) ? 'Deselect Player' : 'Choose Player'}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

const Newsletter = () => (
  <section style={{ textAlign: 'center', padding: '50px', background: '#f0f0f0' }}>
    <h3>Subscribe to our Newsletter</h3>
    <p>Get the latest updates and news right in your inbox!</p>
    <input type="email" placeholder="Enter your email" style={{ padding: '10px', borderRadius: '5px', marginRight: '10px' }} />
    <button style={{ backgroundColor: '#FF4081', padding: '10px 20px', borderRadius: '5px', border: 'none', color: 'white' }}>
      Subscribe
    </button>
  </section>
);

const Footer = () => (
  <footer style={{ background: '#333', color: '#fff', padding: '30px 20px', display: 'flex', justifyContent: 'space-between' }}>
    <div>
      <h4>About Us</h4>
      <p>We are a passionate team dedicated to providing the best services to our customers.</p>
    </div>
    <div>
      <h4>Quick Links</h4>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        <li><a href="#" style={{ color: '#fff' }}>Home</a></li>
        <li><a href="#" style={{ color: '#fff' }}>Services</a></li>
        <li><a href="#" style={{ color: '#fff' }}>About</a></li>
        <li><a href="#" style={{ color: '#fff' }}>Contact</a></li>
      </ul>
    </div>
    <div>
      <h4>Subscribe</h4>
      <p>Subscribe to our newsletter for the latest updates.</p>
      <input type="email" placeholder="Enter your email" style={{ padding: '10px', borderRadius: '5px', marginRight: '10px' }} />
      <button style={{ backgroundColor: '#FF4081', padding: '10px 20px', borderRadius: '5px', border: 'none', color: 'white' }}>
        Subscribe
      </button>
    </div>
  </footer>
);

const App = () => (
  <div>
    <Header />
    <Banner />
    <AvailablePlayers />
    <Newsletter />
    <Footer />
  </div>
);

export default App;
