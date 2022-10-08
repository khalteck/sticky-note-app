import Header from "./Header";
import Main from "./Main";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Notes from "./Notes";

function App() {
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
            <Notes/>
          </Route>
          {/*the notes page route */}
        </Switch>
      </div>
    </div>
   </Router>
  )
}

export default App;
