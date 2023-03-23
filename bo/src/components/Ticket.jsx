import React, { useEffect } from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Ticket({ ticketsState, ticketChoisi,setTicketsState, setTicketChoisi,setmodalIsOpen, ticketsFilter, setTicketsFilter }) {

  const handleDeleteTicket = (id) => {
    // fetch api/deleteticket
    fetch(`http://localhost:3001/api/ticket/${id}`, {
      method: "DELETE",
    })
      .then((data) => {
        console.log(data);
        setTicketsState((prevState) => {
          const newState = prevState.filter((ticket) => ticket.id !== id);
          return newState;
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <section className="container mx-auto p-6 font-mono">
        <div className="w-full mb-8 overflow-hidden rounded-lg shadow-lg">
          <div className="w-full overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-md font-semibold tracking-wide text-left text-gray-900 bg-gray-100 uppercase border-b border-gray-600">
                  <th className="px-4 py-3 text-center">Sujet</th>
                  <th className="px-4 py-3 text-center">Mail</th>
                  <th className="px-4 py-3 text-center">Status</th>
                  <th className="px-4 py-3 text-center">Date</th>
                  <th className="px-4 py-3 text-center">Actions</th>
                </tr>
              </thead>
              <tbody className="bg-white">
                {ticketsFilter.map((ticket) => (
                  <tr className="text-gray-700" key={ticket.id}>
                    <td className="px-4 py-3 border ">
                      <div className="text-sm">
                        <div>
                          <p className="font-semibold text-black">
                            {ticket.title}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      {ticket.email}
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      {/* if status == OPEN then green backgroudn or red if close */}
                      {/* <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {ticket.status}
                      </span> */}
                      <span
                        className={`px-2 py-1 font-semibold leading-tight text-white rounded-sm ${
                          ticket.status === "OPEN"
                            ? "bg-green-500"
                            : "bg-red-500"
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">{ticket.date}</td>
                    <td className="px-4 py-3 text-sm border">
                      <div className="flex justify-evenly text-sm ">
                        <FaEdit
                          className="w-5 h-5 cursor-pointer"
                          color="#eab308"
                          onClick={(e) => { 
                            setTicketChoisi(ticket)
                            setmodalIsOpen(true)
                          }}
                        />
                        <FaTrash
                          className="w-5 h-5 cursor-pointer"
                          color="#dc2626"
                          onClick={(e) => handleDeleteTicket(ticket.id)}
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Ticket;
