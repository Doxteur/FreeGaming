import React, { useEffect, useState } from "react";
import SearchBarTicket from "./SearchBarTicket";

import { tickets } from "../data/tickets";
import Ticket from "./Ticket";
import ModalTicketInfo from "./ModalTicketInfo";

function TicketList() {
  const [ticketsState, setTicketsState] = useState([]);
  const [ticketChoisi, setTicketChoisi] = useState(null);
  const [modalIsOpen, setmodalIsOpen] = useState(false);
  const [ticketsFilter, setTicketsFilter] = useState([]);

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


  useEffect(() => {
    setTicketsFilter(ticketsState);
  }, [ticketsState]);

  return (
    <div className=" ">
      <h1 className="text-3xl font-bold p-4 ">Liste des Tickets</h1>

      <SearchBarTicket ticketsState={ticketsState} setTicketsFilter={setTicketsFilter} />

      {/* Liste des Tickets */}
      <div className="flex flex-col">
        {ticketsState && ticketsState.length > 0 ?  (
          <Ticket 
          ticketsState={ticketsState} 
          setTicketsState={setTicketsState} 
          ticketChoisi={ticketChoisi} 
          setTicketChoisi={setTicketChoisi} 
          setmodalIsOpen={setmodalIsOpen}
          ticketsFilter={ticketsFilter}
          setTicketsFilter={setTicketsFilter} 
          />
        ):(
          <div className="flex justify-center items-center h-96">
            <h1 className="text-2xl font-bold">Aucun ticket trouvé</h1>
          </div>
        )}
      </div>

      {/* Modal */}
      {modalIsOpen && (
        <ModalTicketInfo
          setTicketsState={setTicketsState}
          setTicketChoisi={setTicketChoisi}
          ticketChoisi={ticketChoisi}
          modalIsOpen={modalIsOpen}
          setmodalIsOpen={setmodalIsOpen}
        />
      )}
    </div>
  );
}

export default TicketList;
