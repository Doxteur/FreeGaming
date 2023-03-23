import React, { useEffect, useState } from "react";
import SearchBarTicket from "./SearchBarTicket";

import { tickets } from "../data/tickets";
import Ticket from "./Ticket";
import ModalTicketInfo from "./ModalTicketInfo";

function TicketList() {
  const [ticketsState, setTicketsState] = useState([]);
  const [ticketChoisi, setTicketChoisi] = useState(null);
  const [modalIsOpen, setmodalIsOpen] = useState(false);

  useEffect(() => {
    // fetch
    fetch("http://localhost:3001/api/ticket")
      .then((response) => response.json())
      .then((data) => {
        setTicketsState(data.Tickets);
      })
      .catch((error) => {
        console.log(error);
      });

  }, []);


  return (
    <div>
      <h1 className="text-3xl font-bold p-4">Liste des Tickets</h1>
      <SearchBarTicket />
      <div className="flex flex-col">
        {ticketsState && ticketsState.length > 0 &&  (
          <Ticket ticketsState={ticketsState} ticketChoisi={ticketChoisi} setTicketChoisi={setTicketChoisi} setmodalIsOpen={setmodalIsOpen} />
        )}
      </div>
      {modalIsOpen && (
        <ModalTicketInfo
          ticketChoisi={ticketChoisi}
          modalIsOpen={modalIsOpen}
          setmodalIsOpen={setmodalIsOpen}
        />
      )}
    </div>
  );
}

export default TicketList;
