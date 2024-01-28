import "./components/StyleSheet/App.css";
import Home from "./components/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./components/user/SignUp";
import SignIn from "./components/user/SignIn";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <Router className="App">
      <Navbar />
      <Switch>
        <Route path="/register" exact>
          <SignUp />
        </Route>
        <Route path="/login" exact>
          <SignIn />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
