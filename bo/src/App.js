import React, { useEffect, useState } from "react";
import "./App.css";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./components/Login";
import Dashboard from "./components/Dashboard";
import FormulaireAjout from "./components/FormulaireAjout";
import SearchTicketForm from "./components/SearchTicketForm";

function App() {
  const [isLogged, setIsLogged] = useState({
    isLogged: false,
    role: "",
  });


  function requireAuthAdmin(next) {
    if (!isLogged.isLogged && isLogged.role !== "admin") {
      return <Navigate to="/login" />;
    }
    return next;
  }

  function requireAuthUser(next) {
    if (!isLogged.isLogged && isLogged.role !== "user") {
      return <Navigate to="/login" />;
    }
    return next;
  }

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login setIsLogged={setIsLogged} />} />
        <Route path="/" element={requireAuthAdmin(<Dashboard/>)} />
        <Route path="/SearchTicket" element={requireAuthUser(<SearchTicketForm/>)} />
        <Route path="/AddTicket" element={requireAuthUser(<FormulaireAjout/>)} />
      </Routes>
    </Router>
  );
}

export default App;
