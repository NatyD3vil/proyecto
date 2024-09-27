import React from 'react';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

const App = () => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div style={{ marginLeft: '220px', padding: '1rem' }}>
        <h2>Dashboard</h2>
        {/* Aquí irá el Balance (Dashboard) */}
      </div>
    </div>
  );
};

export default App;
