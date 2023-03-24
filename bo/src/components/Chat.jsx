import React, { useEffect,useState } from "react";

function Chat({ ticketChoisi,origine}) {
  const [chatMessages, setChatMessages] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    fetch(`http://localhost:3001/api/ticket/${ticketChoisi.id}`)
      .then((response) => response.json())
      .then((data) => {
        setChatMessages(data.messages);
        setUser(data.user[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
    
  const sendChat = (e) => {
    e.preventDefault();
    const message = e.target.elements[0].value;

    const jsonToSend = JSON.stringify({
      description: message,
      email: origine,
      emailUser: user.email,
    });

    // fetch 
    fetch(`http://localhost:3001/api/writeMessage/${ticketChoisi.id}`, {
      method: "POST",
      body: jsonToSend,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((data) => {
        const newMessage = {
          description: message,
          emailUser: origine,
        }
        setChatMessages([...chatMessages, newMessage]);
      })
      .catch((error) => {
        console.log(error);
      });

    e.target.elements[0].value = "";
  };


  return (
    <div className="flex antialiased text-gray-800 m-auto">
      <div className="flex flex-row">
        <div className="flex flex-col flex-auto p-6">
          <div className="flex flex-col flex-auto flex-shrink-0 rounded-2xl bg-gray-100 max-h-96 p-4 max-w-md ">

            {/* Message */}
            {chatMessages && (
            <div className="overflow-y-scroll break-words">
              {chatMessages.map((message,index) => {
                const isSupport = message.emailUser !== user.email;

                  return !isSupport ? (
                  <div className="messageUser" key={index}>
                    <div className="flex items-center ">
                      <div className="w-12 h-12 mx-2">
                        <img
                          src="https://images.unsplash.com/photo-1610397095767-84a5b4736cbd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80"
                          alt=""
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                      <h1 className="font-bold mx-2">{user.lastname} {user.name}</h1>
                    </div>
                    <p className="m-2 bg-white rounded-xl p-2">
                      {message.description}
                    </p>
                  </div>
                ) : (
                  <div className="messageSupport" key={index}>
                    <div className="flex justify-end items-center ">
                      <div className="w-12 h-12 mx-2 mt-4">
                        <img
                          src="https://randomuser.me/api/portraits/women/85.jpg"
                          alt=""
                          className="w-full h-full object-cover rounded-full"
                        />
                      </div>
                    </div>
                    <p className="m-2 bg-white rounded-xl p-2 text-right">
                      {message.description}
                    </p>
                  </div>
                );
              })}
            </div>
            )}
            {/* Bottom Bar */}
            <div className="flex flex-row items-center h-16 rounded-xl bg-white w-full px-4 mt-2">
              <div>
                <button className="flex items-center justify-center text-gray-400 hover:text-gray-600">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                    ></path>
                  </svg>
                </button>
              </div>
              <form onSubmit={(e) => sendChat(e)} className="flex items-center">
              <div className="flex-grow ml-4">
                <div className="relative w-full">
                  <input
                    type="text"
                    className="flex w-full border rounded-xl focus:outline-none focus:border-indigo-300 pl-4 h-10"
                  />
                </div>
              </div>
                {/* Send Button */}
              <div className="ml-4">
                <button className="flex items-center justify-center bg-indigo-500 hover:bg-indigo-600 rounded-xl text-white px-4 py-1 flex-shrink-0 " >
                  <span>Send</span>
                  <span className="ml-2">
                    <svg
                      className="w-4 h-4 transform rotate-45 -mt-px"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;
