import Header from "./Header";
import Main from "./Main";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Notes from "./Notes";
import { useState } from "react"


function App() {

  //to set the default notes in state
  const[note, setNote] = useState([
    {
        title: "Steps to take on how to look, smile, code and live like Khalid",
        date: "may 15, 2022",
        body: "Blah blah.. make your own note :)",
        hover: false
    },
    {
        title: "12 eye catching mobile wallpapers",
        date: "june 16, 2022",
        body: "Blah blah.. make your own note :)",
        hover: false
    },
    {
        title: "How to make your brand stand out online",
        date: "sept 2, 2022",
        body: "Blah blah.. make your own note :)",
        hover: false
    },
    {
        title: "How to code like Khalid",
        date: "may 15, 2022",
        body: "Blah blah.. make your own note :)",
        hover: false
    },
    {
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
        </Switch>
      </div>
    </div>
   </Router>
  )
}

export default App;
