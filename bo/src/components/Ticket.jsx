import React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

function Ticket({ ticketsState, ticketChoisi, setTicketChoisi,setmodalIsOpen }) {
  return (
    <div>
      {" "}
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
                {ticketsState.map((ticket) => (
                  <tr className="text-gray-700 ">
                    <td className="px-4 py-3 border ">
                      <div className="text-sm">
                        <div>
                          <p className="font-semibold text-black">
                            {ticket.sujet}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-3 text-ms font-semibold border">
                      22
                    </td>
                    <td className="px-4 py-3 text-xs border">
                      <span className="px-2 py-1 font-semibold leading-tight text-green-700 bg-green-100 rounded-sm">
                        {" "}
                        Acceptable{" "}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm border">6/4/2000</td>
                    <td className="px-4 py-3 text-sm border">
                      <div className="flex justify-evenly text-sm ">
                        <FaEdit
                          className="w-5 h-5 cursor-pointer"
                          color="#eab308"
                          onClick={(e) =>{ 
                            setTicketChoisi(ticket)
                            setmodalIsOpen(true)
                          }}
                        />
                        <FaTrash
                          className="w-5 h-5 cursor-pointer"
                          color="#dc2626"
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
