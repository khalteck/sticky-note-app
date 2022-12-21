import Main from "./Main";
import { Routes, Route } from "react-router-dom";
import Notes from "./pages/Notes";
import { useState } from "react";
import Detail from "./pages/Detail";
import "./output.css";
import notedata from "./data/notedata.json";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Login from "./pages/Login";

function App() {
  //to set the default notes in state
  const [note, setNote] = useState(notedata);

  //to set hover state of each sticky note
  function handleNoteHover(index) {
    const newNote = [...note];
    newNote[index].hover = true;
    setNote(newNote);
  }

  //to set hover out state of each sticky note
  function handleNoteOut(index) {
    const newNote = [...note];
    newNote[index].hover = false;
    setNote(newNote);
  }

  //to handle the click state of each sticky note
  function handleClick(index) {
    const newNote = [...note];
    newNote[index].hover = false;
    setNote(newNote);
  }

  //to show and hide password
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route
        path="/notes"
        element={
          <Notes
            note={note}
            handleNoteHover={handleNoteHover}
            handleNoteOut={handleNoteOut}
            handleClick={handleClick}
          />
        }
      />
      <Route path="/note/:id" element={<Detail note={note} />} />
      <Route path="/create" element={<Create />} />
      <Route
        path="/register"
        element={
          <Register
            showPassword={showPassword}
            togglePassword={togglePassword}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login showPassword={showPassword} togglePassword={togglePassword} />
        }
      />
    </Routes>
  );
}

export default App;
