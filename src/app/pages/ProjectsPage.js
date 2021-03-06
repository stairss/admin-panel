import React from "react";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../_metronic/layout";
import Basic from "../../_metronic/layout/components/addProject/Basic/Basic";
import Contractor from "../../_metronic/layout/components/addProject/Contractor/Contractor";
import Nav from "../../_metronic/layout/components/addProject/Nav";

const ProjectsPage = () => {
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/panel/dodaj/projekt/dane-podstawowe" exact>
          <Basic />
        </ContentRoute>
        {
          <Redirect
            exact
            from="/panel/dodaj/projekt/wykonawcy"
            to="/panel/dodaj/projekt/wykonawcy/doradztwo"
          />
        }
        <ContentRoute path="/panel/dodaj/projekt/wykonawcy">
          <Contractor />
        </ContentRoute>
      </Switch>
    </>
  );
};

export default ProjectsPage;
