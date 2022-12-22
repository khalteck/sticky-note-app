import Main from "./Main";
import { Routes, Route, useNavigate } from "react-router-dom";
import Notes from "./pages/Notes";
import { useState, useEffect } from "react";
import Detail from "./pages/Detail";
import "./output.css";
import notedata from "./data/notedatamock.json";
import userNoteData from "./data/userNoteData.json";
import Create from "./pages/Create";
import Register from "./pages/Register";
import Login from "./pages/Login";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { auth, createUserDocument, db } from "./firebase/firebase-config";
import { collection, getDocs } from "firebase/firestore";

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
      setUser(currentUser.email);
    });
  }, []);

  //to get users saved in db
  const getUserDetails = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      // console.log(`${doc.id} => ${doc.data()}`);
    });
  };

  console.log(getUserDetails());

  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  //to handle reg form data submit to firebase
  const register = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      const user = await createUserWithEmailAndPassword(
        auth,
        regForm.email,
        regForm.password
      );
      console.log(user);
      setShowLoader(false);
      navigate("/notes");
      await createUserDocument(regForm.email, regForm.displayName);
    } catch (error) {
      setShowLoader(false);
      console.log(error.message);
    }
  };

  //to log in users
  const login = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      const user = await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      );

      console.log(user);
      setShowLoader(false);
      navigate("/notes");
    } catch (error) {
      setShowLoader(false);
      console.log(error.message);
    }
  };

  //to log out users
  const logout = async () => {
    signOut(auth).then(() => {
      navigate("/");
    });
  };

  //to set the default notes in state
  const [note, setNote] = useState(notedata);
  const [userNote, setUserNote] = useState(userNoteData);

  //to set hover state of each sticky note
  function handleNoteHover(index) {
    const newNote = [...note];
    newNote[index].hover = true;
    setNote(newNote);
    const newUserNote = [...userNote];
    newUserNote[index].hover = true;
    setUserNote(newUserNote);
  }

  //to set hover out state of each sticky note
  function handleNoteOut(index) {
    const newNote = [...note];
    newNote[index].hover = false;
    setNote(newNote);
    const newUserNote = [...userNote];
    newUserNote[index].hover = false;
    setNote(newUserNote);
  }

  //to handle the click state of each sticky note
  function handleClick(index) {
    const newNote = [...note];
    newNote[index].hover = false;
    setNote(newNote);
    const newUserNote = [...userNote];
    newUserNote[index].hover = false;
    setNote(newUserNote);
  }

  //to show and hide password
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  return (
    <Routes>
      <Route path="/" element={<Main user={user} logout={logout} />} />
      <Route
        path="/notes"
        element={
          <Notes
            user={user}
            note={note}
            userNote={userNote}
            handleNoteHover={handleNoteHover}
            handleNoteOut={handleNoteOut}
            handleClick={handleClick}
            logout={logout}
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
            showLoader={showLoader}
            login={login}
            user={user}
          />
        }
      />
    </Routes>
  );
}

export default App;
