import React, { useEffect } from "react";
import { useSubheader } from "../../_metronic/layout";
import Nav from "../../_metronic/layout/components/edit/Nav";
import Personal from "../../_metronic/layout/components/personal/Personal";
import Projects from "../../_metronic/layout/components/projects/Projects";
import { Redirect, Switch } from "react-router-dom";
import { ContentRoute } from "../../_metronic/layout";
import Checks from "../../_metronic/layout/components/checks/Checks";
import db from "../../firebase";
import { useState } from "react";

export const EditPage = () => {
  const suhbeader = useSubheader();
  suhbeader.setTitle("Mój profil");
  /*   const [users, setUsers] = useState([]);
  const [dane, setDane] = useState([]); */

  /*   useEffect(() => {
    db.collection("users").onSnapshot((snapshot) =>
      // setUsers(snapshot.docs.map((doc) => doc.data()))
      setUsers(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
  }, []); */
  /*   useEffect(() => {
    db.collection("test")
      .doc("1")
      .collection("2")
      .onSnapshot((snapshot) =>
        setDane(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []); */
  /*  useEffect(() => {
    const ref = db.collection("test");
    const snapshot = ref.get();
    snapshot.forEach((doc) => {
      setDane(doc.id, "=>", doc.data());
    });
  }, []); */
  // console.log(dane);
  return (
    <>
      <Nav />
      <Switch>
        <ContentRoute path="/panel/edytuj/dane-osobowe">
          <Personal />
        </ContentRoute>
        {
          <Redirect
            exact
            from="/panel/edytuj/dane-projektowe"
            to="/panel/edytuj/dane-projektowe/podstawowe"
          />
        }
        <ContentRoute
          path="/panel/edytuj/dane-projektowe"
          component={Projects}
        />
        {
          <Redirect
            exact
            from="/panel/edytuj/kontrole"
            to="/panel/edytuj/kontrole/szkolenie"
          />
        }
        <ContentRoute path="/panel/edytuj/kontrole" component={Checks} />
      </Switch>
    </>
  );
};
