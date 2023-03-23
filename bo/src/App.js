import React from 'react';
import './App.css';
import SideBar from './components/SideBar';
import TicketList from './components/TicketList';

function App() {
  return (
    <div className="App h-screen bg-gray-50">
      <SideBar />
      <TicketList />
      </div>
  );
}

export default App;
