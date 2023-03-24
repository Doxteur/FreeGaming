import React from "react";
import { Link } from "react-router-dom";
import Chat from "./Chat";

function SearchTicketForm() {
  const [isSearched, setIsSearched] = React.useState(false);
  const [ticket, setTicket] = React.useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    // fetch with ticket id

    fetch(`http://localhost:3001/api/ticket/${e.target.elements[0].value}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setTicket(data);
        setIsSearched(true);

      })
      .catch((error) => {
        console.log(error);
      });

  
  };
  return (
    <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
      <div class="relative py-3 sm:max-w-xl sm:mx-auto">
        <div class="absolute inset-0 bg-gradient-to-r from-red-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
        <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
          <div class="max-w-md mx-auto">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/5/52/Free_logo.svg"
              alt="logo"
              class="w-1/2 mx-auto"
            />
            <div>
              <h1 class="text-2xl font-semibold">
                Chercher par votre numéro de ticket :
              </h1>
              {/* Input */}
              <div class="relative my-4">
                <form onSubmit={(e) => handleSubmit(e)}>
                  <input
                    autocomplete="off"
                    id="ticketNumber"
                    name="ticketNumber"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-b-secondary"
                    placeholder="Numéro"
                  />
                  <label
                    for="lastname"
                    class="absolute  left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm "
                  >
                    Numero de ticket
                  </label>
                  <div className="flex justify-between">
                    <button class="bg-red-500 text-white rounded-md px-2 py-1 mt-4">
                      Chercher
                    </button>
                    <button class="bg-green-500 text-white rounded-md px-2 py-1 mt-4">
                      <Link to="/AddTicket">Nouveau Ticket</Link>
                    </button>
                  </div>
                </form>
                {isSearched && <Chat ticketChoisi={ticket.ticket[0]} origine={ticket.user[0].email} />}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchTicketForm;
