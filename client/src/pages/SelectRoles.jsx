import React from "react";
import GreetingPage from "./GreetingPage";

const SelectRoles = () => {
  const isLoggedIn = false;
  if (!isLoggedIn) {
    return <GreetingPage />;
  }
  // add conditional rendering
  return <div>SelectRoles</div>;
};

export default SelectRoles;
