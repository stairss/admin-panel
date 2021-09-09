import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../../../../firebase";
import {
  Form,
  FormDateContainer,
  FormFlexContainer,
  FormHeader,
  FormInput,
  FormInputMarker,
  FormLabel,
  FormLabelMarker,
  FormList,
  FormListItem,
  FormOption,
  FormSelect,
  FormSpan,
  FormSubHeader,
  FromDateWrapper,
} from "../ProjectsElements";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "1%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    "&:nth-child(1)": {
      marginRight: "2%",
    },
    "@media (max-width: 1000px)": {
      width: "30%",
    },
    "@media (max-width: 500px)": {
      width: "35%",
    },
  },
}));

const Internship = () => {
  const [staz, setStaz] = useState([]);
  const [dotyczy, setDotyczy] = useState(true);
  const [ubezbieczenieNnwOd, setUbezbieczenieNnwOd] = useState("");
  const [ubezbieczenieNnwDo, setUbezbieczenieNnwDo] = useState("");
  const [
    ubezbieczenieNnwPrzedluzenie,
    setUbezbieczenieNnwPrzedluzenie,
  ] = useState("");
  const [dataPodpisaniaUmowy, setDataPodpisaniaUmowy] = useState("");
  const [stazOd, setStazOd] = useState("");
  const [stazDo, setStazDo] = useState("");
  const [przedluzenieStazuDo, setPrzedluzenieStazuDo] = useState("");
  const [medycynaPracy, setMedycynaPracy] = useState("");
  const [nazwaPracodawcy, setNazwaPracodawcy] = useState("");
  const [kodPocztowyPracodawcy, setKodPocztowyPracodawcy] = useState("");
  const [miastoPracodawcy, setMiastoPracodawcy] = useState("");
  const [ulicaPracodawcy, setUlicaPracodawcy] = useState("");
  const [numerPracodawcy, setNumerPracodawcy] = useState("");
  const [kodPocztowyStazu, setKodPocztowyStazu] = useState("");
  const [miastoStazu, setMiastoStazu] = useState("");
  const [ulicaStazu, setUlicaStazu] = useState("");
  const [numerStazu, setNumerStazu] = useState("");
  const [nipStazu, setNipStazu] = useState("");
  const [stanowiskoStazu, setStanowiskoStazu] = useState("");
  const [opiekunStazuOd, setOpiekunStazuOd] = useState("");
  const [opiekunStazuDo, setOpiekunStazuDo] = useState("");
  const [nazwiskoOpiekuna, setNazwiskoOpiekuna] = useState("");
  const [imieOpiekuna, setImieOpiekuna] = useState("");
  const [emailOpiekuna, setEmailOpiekuna] = useState("");
  const [telefonOpiekuna, setTelefonOpiekuna] = useState("");
  const [wymiarGodzinPracyOpiekuna, setWymiarGodzinPracyOpiekuna] = useState(
    ""
  );
  const [godzinyStazuOd, setGodzinyStazuOd] = useState("");
  const [godzinyStazuDo, setGodzinyStazuDo] = useState("");
  const [dodajGodziny, setDodajGodziny] = useState("");
  const [dniUrlopu, setDniUrlopu] = useState("");
  const [pozostaleDniUrlopu, setPozostaleDniUrlopu] = useState("");
  const [urlopOd, setUrlopOd] = useState("");
  const [urlopDo, setUrlopDo] = useState("");
  const [wybraneDniUrlopu, setWybraneDniUrlopu] = useState("");
  const [zgloszenieZus, setZgloszenieZus] = useState("");
  const [wygloszenieZus, setWygloszenieZus] = useState("");
  const [stypendiumOd, setStypendiumOd] = useState("");
  const [stypendiumDo, setStypendiumDo] = useState("");
  const [dniPrzepracowane, setDniPrzepracowane] = useState("");
  const [dniWyliczeniaZus, setDniWyliczeniaZus] = useState("");
  const [wyplaconoStypendium, setWyplaconoStypendium] = useState("");
  const [uwagi, setUwagi] = useState("");
  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("staz")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setStaz(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);

  /*   const handleSubmitEmployer = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("staz")
      .set({
        ubezbieczenieNnw,
        dataPodpisaniaUmowy,
        stazOd,
        stazDo,
        przedluzenieStazuDo,
        medycynaPracy,
        sanepid,
        nazwaPracodawcy,
        kodPocztowyPracodawcy,
        miastoPracodawcy,
        ulicaPracodawcy,
        numerPracodawcy,
        kodPocztowyStazu,
        miastoStazu,
        ulicaStazu,
        numerStazu,
        nipStazu,
        stanowiskoStazu,
        emailOpiekuna,
        telefonOpiekuna,
        wymiarGodzinPracyOpiekuna,
        godzinyStazuOd,
        godzinyStazuDo,
      });
    console.log("dodano");
  }; */

  /*   const handleSubmitHoliday = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("staz")
      .set({
        dniUrlopu,
        pozostaleDniUrlopu,
        urlopOd,
        urlopDo,
        wybraneDniUrlopu,
      });
    console.log("dodano");
  }; */

  /*   const handleSubmitScholarship = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("staz")
      .set({
        zgloszenieZus,
        wygloszenieZus,
        stypendiumOd,
        stypendiumDo,
        dniPrzepracowane,
        dniWyliczeniaZus,
        wyplaconoStypendium,
        uwagi,
      });
    console.log("dodano");
  }; */

  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("staz")
      .set({
        dotyczy,
        ubezbieczenieNnwOd,
        ubezbieczenieNnwDo,
        ubezbieczenieNnwPrzedluzenie,
        dataPodpisaniaUmowy,
        stazOd,
        stazDo,
        przedluzenieStazuDo,
        medycynaPracy,
        nazwaPracodawcy,
        kodPocztowyPracodawcy,
        miastoPracodawcy,
        ulicaPracodawcy,
        numerPracodawcy,
        kodPocztowyStazu,
        miastoStazu,
        ulicaStazu,
        numerStazu,
        nipStazu,
        stanowiskoStazu,
        opiekunStazuOd,
        opiekunStazuDo,
        nazwiskoOpiekuna,
        imieOpiekuna,
        emailOpiekuna,
        telefonOpiekuna,
        wymiarGodzinPracyOpiekuna,
        godzinyStazuOd,
        godzinyStazuDo,
        dodajGodziny,
        dniUrlopu,
        pozostaleDniUrlopu,
        urlopOd,
        urlopDo,
        wybraneDniUrlopu,
        zgloszenieZus,
        wygloszenieZus,
        stypendiumOd,
        stypendiumDo,
        dniPrzepracowane,
        dniWyliczeniaZus,
        wyplaconoStypendium,
        uwagi,
      });
    alert("dodano!");
  };

  useEffect(() => {
    if (staz) {
      setDotyczy(staz.dotyczy);
      setUbezbieczenieNnwOd(staz.ubezbieczenieNnwOd || "");
      setUbezbieczenieNnwDo(staz.ubezbieczenieNnwDo || "");
      setUbezbieczenieNnwPrzedluzenie(staz.ubezbieczenieNnwPrzedluzenie || "");
      setDataPodpisaniaUmowy(staz.dataPodpisaniaUmowy || "");
      setStazOd(staz.stazOd || "");
      setStazDo(staz.stazDo || "");
      setPrzedluzenieStazuDo(staz.przedluzenieStazuDo || "");
      setMedycynaPracy(staz.medycynaPracy || "");
      setNazwaPracodawcy(staz.nazwaPracodawcy || "");
      setKodPocztowyPracodawcy(staz.kodPocztowyPracodawcy || "");
      setMiastoPracodawcy(staz.miastoPracodawcy || "");
      setUlicaPracodawcy(staz.ulicaPracodawcy || "");
      setNumerPracodawcy(staz.numerPracodawcy || "");
      setKodPocztowyStazu(staz.kodPocztowyStazu || "");
      setMiastoStazu(staz.miastoStazu || "");
      setUlicaStazu(staz.ulicaStazu || "");
      setNumerStazu(staz.numerStazu || "");
      setNipStazu(staz.nipStazu || "");
      setStanowiskoStazu(staz.stanowiskoStazu || "");
      setOpiekunStazuOd(staz.opiekunStazuOd || "");
      setOpiekunStazuDo(staz.opiekunStazuDo || "");
      setNazwiskoOpiekuna(staz.nazwiskoOpiekuna || "");
      setImieOpiekuna(staz.imieOpiekuna || "");
      setEmailOpiekuna(staz.emailOpiekuna || "");
      setTelefonOpiekuna(staz.telefonOpiekuna || "");
      setWymiarGodzinPracyOpiekuna(staz.wymiarGodzinPracyOpiekuna || "");
      setGodzinyStazuOd(staz.godzinyStazuOd || "");
      setGodzinyStazuDo(staz.godzinyStazuDo || "");
      setDodajGodziny(staz.dodajGodziny || "");
      setDniUrlopu(staz.dniUrlopu || "");
      setPozostaleDniUrlopu(staz.pozostaleDniUrlopu || "");
      setUrlopOd(staz.urlopOd || "");
      setUrlopDo(staz.urlopDo || "");
      setWybraneDniUrlopu(staz.wybraneDniUrlopu || "");
      setZgloszenieZus(staz.zgloszenieZus || "");
      setWygloszenieZus(staz.wygloszenieZus || "");
      setStypendiumOd(staz.stypendiumOd || "");
      setStypendiumDo(staz.stypendiumDo || "");
      setDniPrzepracowane(staz.dniPrzepracowane || "");
      setDniWyliczeniaZus(staz.dniWyliczeniaZus || "");
      setWyplaconoStypendium(staz.wyplaconoStypendium || "");
      setUwagi(staz.uwagi || "");
    }
  }, [staz]);
  useEffect(() => {
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("staz")
      .get()
      .then((doc) => {
        if (doc.exists) {
          setStaz(doc.data());
        } else {
          console.log("No such document!");
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
  }, []);
  const classes = useStyles();

  const handleRefersTo = (e) => {
    e.preventDefault();
    setDotyczy(!dotyczy);
  };

  return (
    <Form>
      <Button
        variant="outlined"
        className={classes.button}
        onClick={handleRefersTo}
      >
        Nie dotyczy (należy kliknąć zapisz)
      </Button>
      <div style={dotyczy ? { opacity: "1" } : { opacity: "0.7" }}>
        <FormList>
          <FormListItem>
            <FormLabelMarker>
              Ubezpieczenie NNW od:
              <FormInputMarker
                type="date"
                value={ubezbieczenieNnwOd}
                onChange={(e) => setUbezbieczenieNnwOd(e.target.value)}
              ></FormInputMarker>
            </FormLabelMarker>
          </FormListItem>
          <FormListItem>
            <FormLabelMarker>
              Ubezpieczenie NNW do:
              <FormInputMarker
                type="date"
                value={ubezbieczenieNnwDo}
                onChange={(e) => setUbezbieczenieNnwDo(e.target.value)}
              ></FormInputMarker>
            </FormLabelMarker>
          </FormListItem>
          <FormListItem>
            <FormLabelMarker>
              Ubezpieczenie NNW przedłużone do:
              <FormInputMarker
                type="date"
                value={ubezbieczenieNnwPrzedluzenie}
                onChange={(e) =>
                  setUbezbieczenieNnwPrzedluzenie(e.target.value)
                }
              ></FormInputMarker>
            </FormLabelMarker>
          </FormListItem>
        </FormList>

        <FormLabel>
          Zgłoszenie do ZUS:
          <FormInput
            value={zgloszenieZus}
            onChange={(e) => setZgloszenieZus(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Wygłoszenie ZUS:
          <FormInput
            value={wygloszenieZus}
            onChange={(e) => setWygloszenieZus(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Data podpisania umowy stażowej:
          <FormInput
            value={dataPodpisaniaUmowy}
            onChange={(e) => setDataPodpisaniaUmowy(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel style={{ alignItems: "center" }}>
          Staż:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={stazOd}
                onChange={(e) => setStazOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={stazDo}
                onChange={(e) => setStazDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
        <FormLabel>
          Przedłużenie stażu do:
          <FormInput
            value={przedluzenieStazuDo}
            onChange={(e) => setPrzedluzenieStazuDo(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Badania medycyna pracy:
          <FormInput
            value={medycynaPracy}
            onChange={(e) => setMedycynaPracy(e.target.value)}
            type="date"
          ></FormInput>
        </FormLabel>
        <FormHeader>Pracodawca:</FormHeader>
        <FormLabel>
          Nazwa pracodawcy:
          <FormInput
            value={nazwaPracodawcy}
            onChange={(e) => setNazwaPracodawcy(e.target.value)}
          ></FormInput>
        </FormLabel>

        <FormLabel>
          Kod pocztowy:
          <FormInput
            value={kodPocztowyPracodawcy}
            onChange={(e) => setKodPocztowyPracodawcy(e.target.value)}
            type="tel"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Miasto:
          <FormInput
            value={miastoPracodawcy}
            onChange={(e) => setMiastoPracodawcy(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Ulica
          <FormInput
            value={ulicaPracodawcy}
            onChange={(e) => setUlicaPracodawcy(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Numer:
          <FormInput
            value={numerPracodawcy}
            onChange={(e) => setNumerPracodawcy(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormHeader>Miejsce odbywania stażu:</FormHeader>
        <FormLabel>
          Kod pocztowy:
          <FormInput
            value={kodPocztowyStazu}
            onChange={(e) => setKodPocztowyStazu(e.target.value)}
            type="tel"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Miasto:
          <FormInput
            value={miastoStazu}
            onChange={(e) => setMiastoStazu(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Ulica
          <FormInput
            value={ulicaStazu}
            onChange={(e) => setUlicaStazu(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Numer:
          <FormInput
            value={numerStazu}
            onChange={(e) => setNumerStazu(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          NIP:
          <FormInput
            value={nipStazu}
            onChange={(e) => setNipStazu(e.target.value)}
            type="tel"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Stanowisko na stażu:
          <FormInput
            value={stanowiskoStazu}
            onChange={(e) => setStanowiskoStazu(e.target.value)}
          ></FormInput>
        </FormLabel>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => alert("będzie zmieniało miejsce odbywania stażu")}
        >
          Dodaj miejsce stażu
        </Button>
        <FormHeader>Opiekun stażu:</FormHeader>
        <FormLabel style={{ alignItems: "center" }}>
          Opiekun stażu
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={opiekunStazuOd}
                onChange={(e) => setOpiekunStazuOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={opiekunStazuDo}
                onChange={(e) => setOpiekunStazuDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
        <FormLabel>
          Nazwisko:
          <FormInput
            value={nazwiskoOpiekuna}
            onChange={(e) => setNazwiskoOpiekuna(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Imię
          <FormInput
            value={imieOpiekuna}
            onChange={(e) => setImieOpiekuna(e.target.value)}
          ></FormInput>
        </FormLabel>
        <FormLabel>
          E-mail
          <FormInput
            value={emailOpiekuna}
            onChange={(e) => setEmailOpiekuna(e.target.value)}
            type="mail"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Telefon:
          <FormInput
            value={telefonOpiekuna}
            onChange={(e) => setTelefonOpiekuna(e.target.value)}
            type="tel"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Wymiar czasu pracy:
          <FormInput
            value={wymiarGodzinPracyOpiekuna}
            onChange={(e) => setWymiarGodzinPracyOpiekuna(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel style={{ alignItems: "center" }}>
          Godziny stażu
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={godzinyStazuOd}
                onChange={(e) => setGodzinyStazuOd(e.target.value)}
                type="time"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={godzinyStazuDo}
                onChange={(e) => setGodzinyStazuDo(e.target.value)}
                type="time"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
        <FormFlexContainer>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => alert("będzie planowało kontrolę stażu")}
          >
            Zaplanuj kontrolę stażu
          </Button>
          <Button
            variant="outlined"
            className={classes.button}
            onClick={() => alert("będzie dodawało godziny stażu")}
          >
            Dodaj godziny
          </Button>
        </FormFlexContainer>
        <FormHeader>Rozliczenie stażu:</FormHeader>

        <FormLabel>
          Liczba dni urlopu:
          <FormInput
            value={dniUrlopu}
            onChange={(e) => setDniUrlopu(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Pozostałe dni urlopu:
          <FormInput
            value={pozostaleDniUrlopu}
            onChange={(e) => setPozostaleDniUrlopu(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel style={{ alignItems: "center" }}>
          Wybierz urlop:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={urlopOd}
                onChange={(e) => setUrlopOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={urlopDo}
                onChange={(e) => setUrlopDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
        <FormLabel>
          Wybrane dni urlopu:
          <FormInput
            value={wybraneDniUrlopu}
            onChange={(e) => setWybraneDniUrlopu(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <Button
          variant="outlined"
          className={classes.button}
          onClick={() => alert("będzie wybierało urlop")}
        >
          Dodaj urlop
        </Button>
        <FormSubHeader>Miesiąc 1:</FormSubHeader>
        <FormLabel style={{ alignItems: "center" }}>
          Stypendium:
          <FormDateContainer>
            <FromDateWrapper>
              <FormSpan>od:</FormSpan>
              <FormInput
                value={stypendiumOd}
                onChange={(e) => setStypendiumOd(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
            <FromDateWrapper>
              <FormSpan>do:</FormSpan>
              <FormInput
                value={stypendiumDo}
                onChange={(e) => setStypendiumDo(e.target.value)}
                type="date"
              ></FormInput>
            </FromDateWrapper>
          </FormDateContainer>
        </FormLabel>
        <FormLabel>
          Liczba dni przepracowanych:
          <FormInput
            value={dniPrzepracowane}
            onChange={(e) => setDniPrzepracowane(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Liczba dni do wyliczenia składek ZUS:
          <FormInput
            value={dniWyliczeniaZus}
            onChange={(e) => setDniWyliczeniaZus(e.target.value)}
            type="number"
          ></FormInput>
        </FormLabel>
        <FormLabel>
          Wypłacono stypendium:
          <FormSelect
            value={wyplaconoStypendium}
            onChange={(e) => setWyplaconoStypendium(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
        <FormLabel>
          Uwagi:
          <FormInput
            value={uwagi}
            onChange={(e) => setUwagi(e.target.value)}
          ></FormInput>
        </FormLabel>
      </div>
      <FormFlexContainer>
        <Button
          variant="outlined"
          className={classes.button}
          style={dotyczy ? { opacity: "1" } : { opacity: "0.7" }}
          onClick={() => alert("będzie dodawało miesiąc")}
        >
          Dodaj miesiąc
        </Button>
        <Button
          onClick={handleSubmit}
          type="submit"
          variant="outlined"
          className={classes.button}
        >
          Zapisz
        </Button>
      </FormFlexContainer>
    </Form>
  );
};

export default Internship;
