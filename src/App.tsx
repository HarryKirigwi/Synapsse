import "./App.css";
import * as React from "react";
import Home from "./Home";
import LoginForm from "./components/LoginForm";
import RegisterForm from "./components/RegisterForm";
import { BrowserRouter as Router, Routes, Route  } from "react-router-dom";

function App() {
  return (
    <>
<div className="bg-generalBg">
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<LoginForm/>} />
        <Route path="/register" element={<RegisterForm/>} />
      </Routes>
    </Router>
    </div>
    </>
  );
}

export default App;
