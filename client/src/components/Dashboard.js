import React from "react";
import useAuth from "../hooks/useAuth";

const Dashboard = ({ code }) => {
  const accessToken = useAuth(code);
  return (
    <div>
      <p>{code}</p>
    </div>
  );
};

export default Dashboard;
