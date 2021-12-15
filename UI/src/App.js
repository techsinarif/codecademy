import React from "react";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import TopBar from "./components/header/TopBar";
import Home from "./components/landing-page/Home";
import OverviewHome from "./components/overview/Home";

import "primereact/resources/themes/saga-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <TopBar />
        <Switch>
          <Route path="/overview" component={OverviewHome} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
