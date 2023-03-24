import React, { useEffect } from "react";
import Modal from "react-modal";
import Chat from "./Chat";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

function ModalTicketInfo({ ticketChoisi, modalIsOpen, setmodalIsOpen, setTicketChoisi, setTicketsState }) {
  const handleChangeStatus = (e) => {
    // fetch api/openticktet
    const action =
      ticketChoisi.status === "OPEN" ? "closeticket" : "openticket";
    fetch(`http://localhost:3001/api/${action}/${ticketChoisi.id}`, {
      method: "GET",
    })
      .then((data) => {
        if(ticketChoisi.status === "OPEN"){
          setTicketsState((prevState) => {
            const newState = prevState.map((ticket) => {
              if (ticket.id === ticketChoisi.id) {
                ticket.status = "CLOSE";
              }
              return ticket;
            });
            return newState;
          }
          );
        }else{
          setTicketsState((prevState) => {
            const newState = prevState.map((ticket) => {
              if (ticket.id === ticketChoisi.id) {
                ticket.status = "OPEN";
              }
              return ticket;
            });
            return newState;
          }
          );
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={() => setmodalIsOpen(false)}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2 className="text-2xl font-bold p-4">Ticket {ticketChoisi.id}</h2>
        {/* input select change ticketChoisi status */}
        <div className="flex flex-col ">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            className="border border-gray-300 rounded-md p-2"
            onChange={(e) => handleChangeStatus(e)}
            defaultValue={ticketChoisi.status}
            >
            <option value="OPEN" >OPEN</option>
            <option value="CLOSE">CLOSE</option>
          </select>
          <Chat ticketChoisi={ticketChoisi} origine={"Support@gmail.com"}/>
        </div>
      </Modal>
    </>
  );
}

export default ModalTicketInfo;
