import React from 'react'
import SideBar from "./SideBar";
import TicketList from "./TicketList";

function Dashboard() {
  return (
    <div className="App h-screen bg-gray-50">
    <SideBar />
    <TicketList />
  </div>  )
}

export default Dashboard