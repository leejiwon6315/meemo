import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../../components/Navigation";
import SchedulePage from "../schedule";
import TodoPage from "../todo";
import CalenderPage from "../calender";
import NoteList from "../doc/components/NoteList";
import Editor from "../doc/components/Editor";

function Home() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route component={SchedulePage} path={"/schedule"} />
        <Route component={TodoPage} path="/todo" />
        <Route component={NoteList} path="/notelist" />
        <Route component={Editor} path="/editor" />
        <Route component={CalenderPage} path="/calender" />
      </Switch>
    </Router>
  );
}

export default Home;
