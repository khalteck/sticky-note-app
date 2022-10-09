import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Notes from "./Notes";
import { useState } from "react"
import Detail from "./Detail";
import "./output.css"


function App() {

  //to set the default notes in state
  const[note, setNote] = useState([
    {
      id: 1,  
      title: "Steps to take on how to look, smile, code and live like Khalid",
      date: "may 15, 2022",
      body: "Blah blah.. make your own note :) /n Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      hover: false
    },
    {
      id: 2,  
      title: "12 eye catching mobile wallpapers",
      date: "june 16, 2022",
      body: "Blah blah.. make your own note :)",
      hover: false
    },
    {
      id: 3,  
      title: "How to make your brand stand out online",
      date: "sept 2, 2022",
      body: "Blah blah.. make your own note :)",
      hover: false
    },
    {
      id: 4,  
      title: "How to code like Khalid",
      date: "may 15, 2022",
      body: "Blah blah.. make your own note :)",
      hover: false
    },
    {
      id: 5,  
      title: "10 great React coding practices",
      date: "may 15, 2022",
      body: "Blah blah.. make your own note :)",
      hover: false
    },
])

//to set hover state of each sticky note
function handleNoteHover(index) {
  const newNote = [...note];
  newNote[index].hover = true;
  setNote(newNote)
}
function handleNoteOut(index) {
  const newNote = [...note];
  newNote[index].hover = false;
  setNote(newNote)
}

  return (
   <Router>
    <div className="app">
      <Header/>
      <div className="content">
        <Switch>
          {/*the homepage route */}
          <Route exact path="/">
            <Main/>
          </Route>
          {/*the homepage route */}

          {/*the notes page route */}
          <Route path="/notes">
            <Notes
              note={note}
              handleNoteHover={handleNoteHover}
              handleNoteOut={handleNoteOut}
            />
          </Route>
          {/*the notes page route */}

          <Route path="/note/:id">
            <Detail
              note={note}
            />
          </Route>
        </Switch>
      </div>
    </div>
   </Router>
  )
}

export default App;
