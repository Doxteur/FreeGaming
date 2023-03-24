import React from "react";
import { Link } from "react-router-dom";

function Login({ setIsLogged }) {
  const handleLogin = (e) => {
    e.preventDefault();
    setIsLogged({
      isLogged: true,
      role: "admin",
    });
    // redirect to the dashboard url
  };
  const handleUserLogin = (e) => {
    e.preventDefault();
    setIsLogged({
      isLogged: true,
      role: "user",
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
              <h1 class="text-2xl font-semibold">Se connecter</h1>
            </div>
            <div class="divide-y divide-gray-200">
              <div class="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="email"
                    name="email"
                    type="text"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-b-secondary"
                    placeholder="Email address"
                  />
                  <label
                    for="email"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm "
                  >
                    Address email
                  </label>
                </div>
                <div class="relative">
                  <input
                    autocomplete="off"
                    id="password"
                    name="password"
                    type="password"
                    class="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600 focus:border-b-secondary"
                    placeholder="Password"
                  />
                  <label
                    for="password"
                    class="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                  >
                    Mot de passe
                  </label>
                </div>
                <div class="relative">
                  <button
                    class="bg-red-500 text-white rounded-md px-2 py-1"
                    onClick={(e) => handleLogin(e)}
                  >
                    <Link to="/">Se connecter</Link>
                  </button>
                  <button
                    class="bg-purple-500 text-white rounded-md px-2 py-1 mx-4"
                    onClick={(e) => handleUserLogin(e)}
                  >
                    <Link to="/SearchTicket">Utilisateur Client</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
