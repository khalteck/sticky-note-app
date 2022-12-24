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
import { auth, db } from "./firebase/firebase-config";
import {
  getDocs,
  addDoc,
  collection,
  query,
  where,
  setDoc,
  doc,
} from "firebase/firestore";

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

  //to save current user from auth in state
  const [user, setUser] = useState({});
  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
  }, []);

  //to save current user from db
  const [currentUserFromDb, setCurrentUserFromDb] = useState({});
  const [waitForUserFromDb, setWaitForUserFromDb] = useState(false);

  //to get users saved in db
  useEffect(() => {
    const getUserDetails = async () => {
      setWaitForUserFromDb(true);
      const userQuery = query(
        collection(db, "users"),
        where("email", "==", user?.email)
      );
      try {
        const querySnapshot = await getDocs(userQuery);
        querySnapshot.forEach((doc) => {
          setCurrentUserFromDb(doc.data());
        });
        setWaitForUserFromDb(false);
      } catch (err) {
        console.log(err.message);
        setWaitForUserFromDb(false);
      }
    };
    getUserDetails();
  }, [user]);

  const [showLoader, setShowLoader] = useState(false);
  const navigate = useNavigate();

  //function to create user doc on sign up
  const createUserDocument = async (email, name) => {
    try {
      const docRef = await addDoc(collection(db, "users"), {
        email: email,
        displayName: name,
        createdAt: new Date(),
      });
      console.log("Document written with ID: ", docRef.id);
    } catch (err) {
      console.error("Error adding document: ", err);
    }
  };

  //to handle reg form data submit to firebase
  const register = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      await createUserWithEmailAndPassword(
        auth,
        regForm.email,
        regForm.password
      );
      setShowLoader(false);
      navigate("/notes");
      await createUserDocument(regForm.email, regForm.displayName);
    } catch (error) {
      setShowLoader(false);
      console.log(error.message);
      alert("Oh good lord! USER ALREADY EXISTS!!");
    }
  };

  //to log in users
  const login = async (e) => {
    e.preventDefault();
    setShowLoader(true);

    try {
      await signInWithEmailAndPassword(
        auth,
        loginForm.email,
        loginForm.password
      );
      setShowLoader(false);
      navigate("/notes");
    } catch (error) {
      setShowLoader(false);
      console.log(error.message);
      alert("Oh commoooon! INVALID USER CREDENTIALS!!");
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
  const [userNote, setUserNote] = useState(
    JSON.parse(localStorage.getItem("stickyNotes")) || userNoteData
  );

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
    if (newUserNote) newUserNote[index].hover = false;
    setUserNote(newUserNote);
  }

  //to handle the click state of each sticky note
  function handleClick(index) {
    const newNote = [...note];
    newNote[index].hover = false;
    setNote(newNote);
    const newUserNote = [...userNote];
    if (newUserNote) newUserNote[index].hover = false;
    setUserNote(newUserNote);
  }

  //to show and hide password
  const [showPassword, setShowPassword] = useState(false);
  function togglePassword() {
    setShowPassword((prev) => !prev);
  }

  //to show and hide welcome message
  const [welcomeMessage, setWelcomeMessage] = useState(true);
  function handleHideWelcome() {
    setWelcomeMessage((prev) => !prev);
  }

  //to control create note input
  const [newNote, setNewNote] = useState({
    title: "",
    body: "",
  });

  //to handle form input change chnage
  function handleNewNoteChange(event) {
    const { id, value } = event.target;
    setNewNote((prevState) => {
      return {
        ...prevState,
        [id]: value,
      };
    });
  }

  //to formate date
  const date = new Date();
  const formattedDate = date
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  const [notesDataFromDb, setNotesDataFromDb] = useState([]);
  const [updateNotes, setUpdateNotes] = useState(false);

  //to send created notes to db
  const createNoteDocument = async (title, body) => {
    try {
      const querySnapshot = await getDocs(collection(db, "notes"));
      let notes = [];
      querySnapshot.forEach((doc) => {
        notes.push(doc.data());
      });
      setNotesDataFromDb(notes);

      await setDoc(
        doc(
          db,
          "notes",
          `${currentUserFromDb?.displayName}-${
            notesDataFromDb.length + 1
          }-${title.replace(/ /g, "_")}`
        ),
        {
          id: notesDataFromDb.length + 1,
          owner: currentUserFromDb?.email,
          title: title,
          body: body,
          createdAt: formattedDate,
        }
      );
      console.log("Note created");
      setUpdateNotes((prev) => !prev);
    } catch (err) {
      console.error("Error creating note: ", err);
    }
  };

  //to add new sticky note
  function addNote(title, body) {
    const newNotes = [
      {
        id: userNote.length + 1,
        title: title,
        date: formattedDate,
        body: body,
        hover: false,
      },
      ...userNote,
    ];
    setUserNote(newNotes);
  }

  //to create new sticky note
  function handleCreate(event) {
    event.preventDefault();
    if (!newNote) {
      return;
    }
    addNote(newNote.title, newNote.body);
    createNoteDocument(newNote.title, newNote.body);
    navigate("/notes");
    // window.location.reload();
  }

  //to save created sticky notes to local storage
  useEffect(() => {
    localStorage.setItem("stickyNotes", JSON.stringify(userNote));
  }, [userNote]);

  //to get notes data from db
  const [notesFromDb, setNotesFromDb] = useState({});

  useEffect(() => {
    const getNotes = async () => {
      const userQuery = query(
        collection(db, "notes"),
        where("owner", "==", user?.email)
      );
      try {
        const querySnapshot = await getDocs(userQuery);
        let notes = [];
        querySnapshot.forEach((doc) => {
          notes.push(doc.data());
        });

        setNotesFromDb(notes);
      } catch (err) {
        console.log(err.message);
      }
    };
    getNotes();
  }, [user, updateNotes]);

  //to show modal in 3 seconds
  const [showModal, setShowModal] = useState(false);

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Main
            user={user}
            logout={logout}
            currentUserFromDb={currentUserFromDb}
            waitForUserFromDb={waitForUserFromDb}
          />
        }
      />
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
            currentUserFromDb={currentUserFromDb}
            welcomeMessage={welcomeMessage}
            handleHideWelcome={handleHideWelcome}
            waitForUserFromDb={waitForUserFromDb}
            notesFromDb={notesFromDb}
          />
        }
      />
      <Route
        path="/note/:id"
        element={
          <Detail
            note={note}
            userNote={userNote}
            user={user}
            currentUserFromDb={currentUserFromDb}
            logout={logout}
            notesFromDb={notesFromDb}
          />
        }
      />
      <Route
        path="/create"
        element={
          <Create
            user={user}
            currentUserFromDb={currentUserFromDb}
            logout={logout}
            handleNewNoteChange={handleNewNoteChange}
            handleCreate={handleCreate}
            newNote={newNote}
            showModal={showModal}
            setShowModal={setShowModal}
          />
        }
      />
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
