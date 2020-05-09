import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import MainPage from "./pages/MainPage.js";

import Nav from "./components/Nav";

function App(props) {
  console.log(props);
  return (
    <div className="App">
      <BrowserRouter>
        <div>{}</div>
        <Nav />
        <Switch>
          <Route exact path="/" component={MainPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
