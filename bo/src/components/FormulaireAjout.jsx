import React, { useEffect, useState } from "react";

function FormulaireAjout() {
  const [newTicket, setNewTicket] = useState(null);

  const handleAddTicket = (e) => {
    e.preventDefault();
    console.log("searching", e);
    // fetch the data from the API
    const body = JSON.stringify({
      title: e.target.title.value,
      description: e.target.description.value,
      name: e.target.name.value,
      lastname: e.target.lastname.value,
      email: e.target.email.value,
    });

    console.log(body);
    fetch("http://localhost:3001/api/addTicket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: body,
    })
    .then((res) => res.json())
      .then((res) => {
          setNewTicket(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    console.log("newTicket", newTicket);
    }, [newTicket]);

  return (
    <>
      {!newTicket && newTicket <= 0 ? (
        <div class="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
          <div class="relative py-3 sm:max-w-xl sm:mx-auto">
            <div class="absolute inset-0 bg-gradient-to-r from-red-300 to-red-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
            <div class="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
              <form onSubmit={(e) => handleAddTicket(e)}>
                <div class="max-w-md mx-auto">
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/5/52/Free_logo.svg"
                    alt="logo"
                    class="w-1/2 mx-auto"
                  />
                  <div>
                    <h1 class="text-2xl font-semibold">Ajouter un ticket</h1>
                  </div>
                  <div class="divide-y divide-gray-200">
                    <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                      <div class="flex justify-evenly">
                        {/* Nom */}
                        <div class="relative">
                          <input
                            autocomplete="off"
                            id="lastname"
                            name="lastname"
                            type="text"
                            class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-b-secondary"
                            placeholder="Nom"
                          />
                          <label
                            for="lastname"
                            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm "
                          >
                            Nom
                          </label>
                        </div>
                        {/* Prénom */}
                        <div class="relative">
                          <input
                            autocomplete="off"
                            id="name"
                            name="name"
                            type="text"
                            class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-b-secondary"
                            placeholder="name"
                          />
                          <label
                            for="name"
                            class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                          >
                            Prénom
                          </label>
                        </div>
                      </div>
                      {/* Email */}
                      <div class="relative">
                        <input
                          autocomplete="off"
                          id="email"
                          name="email"
                          type="email"
                          class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-b-secondary"
                          placeholder="email"
                        />
                        <label
                          for="email"
                          class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Email
                        </label>
                      </div>
                      {/* Title */}
                      <div class="relative">
                      <label
                          for="title"
                          class=" text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Title
                        </label>

                        <select className="w-full border-b-1">
                          <option value="Problème Technique">Problème Technique</option>
                          <option value="Problème de livraison">Problème de livraison</option>
                          <option value="Problème de réseau">Problème de réseau</option>
                          <option value="Autre">Autre</option>
                        </select>
                      </div>
                      {/* Description du problème */}
                      <div class="relative">
                        <textarea
                          autocomplete="off"
                          id="description"
                          name="description"
                          type="text"
                          class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-b-secondary"
                          placeholder="Description"
                          // add row
                          rows="4"
                        />
                        <label
                          for="description"
                          class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                        >
                          Description du problème
                        </label>
                      </div>

                      <div class="relative">
                        <button class="bg-red-500 text-white rounded-md px-2 py-1">
                          Envoyer
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      ) : (
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
                    Votre numéro de ticket est le :
                  </h1>
                  <h1>
                  {newTicket}
                  </h1>
                  <h1 class="text-1xl font-semibold">
                    Vous avez reçu un mail avec le numéro de votre ticket.
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default FormulaireAjout;
