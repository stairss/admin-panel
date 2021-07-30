import React from "react";
import Nav from "./Nav";
import { Switch } from "react-router-dom";
import { ContentRoute } from "../content/ContentRoute";
import Training from "./training/Training";
import Internship from "./internship/Internship";

const Checks = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute
          path="/panel/edytuj/kontrola/szkolenie"
          component={Training}
        />
        <ContentRoute
          path="/panel/edytuj/kontrola/staz"
          component={Internship}
        />
      </Switch>
    </>
  );
};

export default Checks;
