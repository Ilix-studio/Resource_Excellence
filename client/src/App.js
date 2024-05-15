import { Routes, Route } from "react-router-dom";

import AllJobs from "./pages/forJobseekers/AllJobs";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/authentication/Login";
import Signup from "./pages/authentication/SignUp";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<AllJobs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
    </>
  );
};

export default App;
