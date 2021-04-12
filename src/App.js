import React, { useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Logo from "./images/logo.png";
import { Route, Switch, NavLink } from "react-router-dom";
import Menu from "./components/Menu";
import CreateSurvey from "./components/CreateSurvey";
import Published from "./components/Published";

function App() {
  const [surveyQue, setSurveyQue] = useState([]);

  return (
    <>
      <div className="col-md-10 offset-md-1 col-12 text-center">
        <NavLink to="/">
          <img className="col-md-6" src={Logo} alt="logo" />
        </NavLink>
        <Switch>
          <Route exact path="/" component={Menu} />
          <Route exact path="/create">
            <CreateSurvey
              surveyQue={surveyQue}
              setSurveyQue={setSurveyQue}
            ></CreateSurvey>
          </Route>
          <Route exact path="/published">
            <Published questions={surveyQue}></Published>
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
