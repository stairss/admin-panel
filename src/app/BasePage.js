import React, { Suspense } from "react";
import { Redirect, Switch } from "react-router-dom";
import { LayoutSplashScreen, ContentRoute } from "../_metronic/layout";
import { BuilderPage } from "./pages/BuilderPage";
import { EditPage } from "./pages/EditPage";
import { DashboardPage } from "./pages/DashboardPage";
import ProjectsPage from "./pages/ProjectsPage";

export default function BasePage() {
  return (
    <Suspense fallback={<LayoutSplashScreen />}>
      <Switch>
        {<Redirect exact from="/" to="/panel" />}
        <ContentRoute path="/panel" component={DashboardPage} exact />
        <ContentRoute path="/builder" component={BuilderPage} />
        {
          <Redirect
            exact
            from="/panel/edytuj"
            to="/panel/edytuj/dane-osobowe"
          />
        }
        <ContentRoute path="/panel/edytuj" component={EditPage} />
        {
          <Redirect
            exact
            from="/panel/dodaj/projekt"
            to="/panel/dodaj/projekt/dane-podstawowe"
          />
        }
        <ContentRoute path="/panel/dodaj/projekt" component={ProjectsPage} />
      </Switch>
    </Suspense>
  );
}
