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

function ModalTicketInfo({ ticketChoisi, modalIsOpen, setmodalIsOpen }) {
  useEffect(() => {
    console.log("Mon ticket", ticketChoisi);
  }, [ticketChoisi]);

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
        <div className="flex flex-col">
          <label htmlFor="status">Status</label>
          <select
            name="status"
            id="status"
            className="border border-gray-300 rounded-md p-2"
          >
            <option value="Open">Open</option>
            <option value="Closed">Closed</option>
          </select>
          <Chat />
        </div>
      </Modal>
    </>
  );
}

export default ModalTicketInfo;
