import Main from "./Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import Notes from "./pages/Notes";
import { useState, useEffect } from "react";
import Detail from "./pages/Detail";
import "./output.css";
import notedata from "./data/notedata.json";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  // signOut,
} from "firebase/auth";
import { auth } from "./firebase/firebase-config";

function App() {
  //to save reg form input
  const [regForm, setRegForm] = useState({
    displayName: "",
    email: "",
    password: "",
  });

  // console.log(regForm);

  //to handle form input change chnage
  function handleRegChange(event) {
    const { id, value } = event.target;
    setRegForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  //to save login form input
  const [loginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  //to handle form input change chnage
  function handleLoginChange(event) {
    const { id, value } = event.target;
    setLoginForm((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  //to handle reg form data submit to firebase
  const register = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    createUserWithEmailAndPassword(auth, regForm.email, regForm.password)
      .then((res) => {
        setShowLoader(false);
        navigate("/notes");
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err.message);
      });
  };

  //to log in users
  const login = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    signInWithEmailAndPassword(auth, loginForm.email, loginForm.password)
      .then((res) => {
        setShowLoader(false);
        navigate("/dashboard");
      })
      .catch((err) => {
        setShowLoader(false);
        console.log(err.message);
      });
  };

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
            handleRegChange={handleRegChange}
            regForm={regForm}
            showLoader={showLoader}
            register={register}
            user={user}
          />
        }
      />
      <Route
        path="/login"
        element={
          <Login
            showPassword={showPassword}
            togglePassword={togglePassword}
            handleLoginChange={handleLoginChange}
            login={login}
          />
        }
      />
    </Routes>
  );
}

export default App;
