import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../../pages/Login";
import SignUp from "../../pages/SignUp";

import AdminPanel from "../../pages/AdminPanel";

import Quiz from "../../pages/Quiz";


export default function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/log-in" element={<Login />} />
          <Route path="/quiz" element={<Quiz />} />
          <Route path="/admin-panel" element={<AdminPanel/>} />
        </Routes>
      </Router>
    </>
  );
}