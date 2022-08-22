import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Notes from "./components/Notes";
import CreateNote from "./components/CreateNote";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/notes" element={<Notes />} />
        <Route path="/create" element={<CreateNote />} />
      </Routes>
    </Router>
  );
};

export default App;
