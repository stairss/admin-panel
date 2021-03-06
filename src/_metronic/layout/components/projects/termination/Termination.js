import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect } from "react";
import { useState } from "react";
import db from "../../../../../firebase";
import {
  Form,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
} from "../ProjectsElements";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "3%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    marginRight: "2%",

    "&:nth-child(1)": {},
  },
}));

const Termination = () => {
  const [udzial, setUdzial] = useState([]);
  const [dataZakonczeniaUdzialu, setDataZakonczeniaUdzialu] = useState("");
  const [innyPowod, setInnyPowod] = useState("");
  const [zakonczylZgonieZeSciezka, setZakonczylZgonieZeSciezka] = useState(
    "Tak"
  );
  const [powodNieukonczenia, setPowodNieukonczenia] = useState("");
  const [dokumentPotwierdzajacy, setDokumentPotwierdzajacy] = useState("");
  const [dataDokumentu, setDataDokumentu] = useState("");
  const classes = useStyles();

  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("udzial")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setUdzial(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  useEffect(() => {
    if (udzial) {
      setDataZakonczeniaUdzialu(udzial.dataZakonczeniaUdzialu || "");
      setZakonczylZgonieZeSciezka(udzial.zakonczylZgonieZeSciezka || "");
      setInnyPowod(udzial.innyPowod || "");
      setPowodNieukonczenia(udzial.powodNieukonczenia || "");
      setDokumentPotwierdzajacy(udzial.dokumentPotwierdzajacy || "");
      setDataDokumentu(udzial.dataDokumentu || "");
    }
  }, [udzial]);

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("udzial")
      .set({
        dataZakonczeniaUdzialu,
        innyPowod,
        zakonczylZgonieZeSciezka,
        powodNieukonczenia,
        dokumentPotwierdzajacy,
        dataDokumentu,
      });
    console.log("dodano");
  };

  return (
    <Form>
      <FormLabel>
        Data zako??czenia udzia??u w projekcie:
        <FormInput
          value={dataZakonczeniaUdzialu}
          onChange={(e) => setDataZakonczeniaUdzialu(e.target.value)}
          type="date"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Czy UP zako??czy?? zgodnie ze ??cie??k??:
        <FormSelect
          value={zakonczylZgonieZeSciezka}
          onChange={(e) => setZakonczylZgonieZeSciezka(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      {zakonczylZgonieZeSciezka === "Nie" ? (
        <FormLabel>
          Pow??d zako??czenia niezgodnie ze ??cie??k??:
          <FormSelect
            value={powodNieukonczenia}
            onChange={(e) => setPowodNieukonczenia(e.target.value)}
          >
            <FormOption>Podj??cie zatrudnienia</FormOption>
            <FormOption>Rezygnacja UP</FormOption>
            <FormOption>
              Skre??lenie za nieobecno??ci powy??ej 20% na szkoleniu
            </FormOption>
            <FormOption>
              Skre??lenie za nieobecno??ci powy??ej 20% na sta??u
            </FormOption>
            <FormOption>
              Skre??lenie ze sta??u - 33 dni ci??g??ej nieobecno??ci (L4)
            </FormOption>
            <FormOption>Nieusprawiedliwiona obecno???? na szkoleniu</FormOption>
            <FormOption>Nieusprawiedliwiona obecno???? na sta??u</FormOption>
            <FormOption>
              Wypowiedzenie przez pracodawc?? umowy sta??owej
            </FormOption>
            <FormOption>Inny pow??d</FormOption>
          </FormSelect>
        </FormLabel>
      ) : (
        <></>
      )}
      {powodNieukonczenia === "Inny pow??d" &&
      zakonczylZgonieZeSciezka === "Nie" ? (
        <FormLabel>
          Pow??d zako??czenia niezgodnie ze ??cie??k??:
          <FormInput
            value={innyPowod}
            onChange={(e) => setInnyPowod(e.target.value)}
          ></FormInput>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormLabel>
        Dokument potwierdzaj??cy zako??czenie udzia??u w projekcie:
        <FormSelect
          value={dokumentPotwierdzajacy}
          onChange={(e) => setDokumentPotwierdzajacy(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      {dokumentPotwierdzajacy === "Tak" ? (
        <FormLabel>
          Data dokumentu:
          <FormInput
            value={dataDokumentu}
            onChange={(e) => setDataDokumentu(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
      ) : (
        <></>
      )}

      <Button
        onClick={handleSubmit}
        type="submit"
        variant="outlined"
        className={classes.button}
      >
        Zako??cz udzia??
      </Button>
    </Form>
  );
};

export default Termination;
