import { Routes, Route } from "react-router-dom";

import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/SignUp";
import SelectRoles from "./pages/SelectRoles";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SelectRoles />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
