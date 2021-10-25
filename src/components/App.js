import AppWrapper from "./AppWrapper";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path="/">
            <AppWrapper />
          </Route>
        </Switch>
      </Router>
  )
}

export default App;
