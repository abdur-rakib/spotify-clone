import React from "react";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const App = () => {
  const code = new URLSearchParams(window.location.search).get("code");
  return code ? <Dashboard code={code} /> : <Login />;
};

export default App;
