import { Button, makeStyles } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import db from "../../../../../firebase";
import {
  Form,
  FormDateContainer,
  FormHeader,
  FormInput,
  FormLabel,
  FormOption,
  FormSelect,
  FormSpan,
  FromDateWrapper,
} from "../ProjectsElements";

const useStyles = makeStyles((theme) => ({
  button: {
    marginTop: "1%",
    width: "20%",
    fontWeight: 700,
    border: "1px solid rgba(0,0,0,.8)",
    "@media (max-width: 1000px)": {
      width: "30%",
    },
    "@media (max-width: 500px)": {
      width: "35%",
    },
  },
}));

export default function Inputs({ podstawowe }) {
  const [dataZgloszenia, setDataZgloszenia] = useState("");
  const [dataPodpisania, setDataPodpisania] = useState("");
  const [wiek, setWiek] = useState(0);
  const [wyksztalcenie, setWyksztalcenie] = useState("");
  const [niepelnosprawnosc, setNiepelnosprawnosc] = useState("");
  const [
    dokuemntPotwierdzajacyNiepelnosprawnosc,
    setDokuemntPotwierdzajacyNiepelnosprawnosc,
  ] = useState("");
  const [status, setStatus] = useState("");
  const [osobaPracujaca, setOsobaPracujaca] = useState("");
  const [osobaBezrobotna, setOsobaBezrobotna] = useState("");
  const [uczaca, setUczaca] = useState("");
  const [koniecEdukacji, setKoniecEdukacji] = useState("");
  const [outplacment, setOutplacment] = useState("");
  const [bezrobocie, setBezrobocie] = useState(0);
  const [numerKonta, setNumerKonta] = useState("");
  const [mniejszoscNarodowa, setMniejszoscNarodowa] = useState("");
  const [bezdomna, setBezdomna] = useState("");
  const [niekorzystna, setNiekorzystna] = useState("");
  const [ct9, setCt9] = useState("");
  const [pozbawienieWolnosci, setPozbawienieWolnosci] = useState("");
  const [rolnictwo, setRolnictwo] = useState("");
  const [ubezpieczenie, setUbezpieczenie] = useState("");
  const [rodzajUbezpieczenia, setRodzajUbezpieczenia] = useState("");
  const [nazwaFirmy, setNazwaFirmy] = useState("");
  const [miastoFirmy, setMiastoFirmy] = useState("");
  const [ulicaFirmy, setUlicaFirmy] = useState("");
  const [numerFirmy, setNumerFirmy] = useState("");
  const [kodPocztowyFirmy, setKodPocztowyFirmy] = useState("");
  const [stanowisko, setStanowisko] = useState("");
  const [klasyfikacja, setKlasyfikacja] = useState("");
  const [innaKlasyfikacja, setInnaKlasyfikacja] = useState("");
  const [zatrudnienieOd, setZatrudnienieOd] = useState("");
  const [zatrudnienieDo, setZatrudnienieDo] = useState("");
  const [rodzajPrzedsiebiorstwa, setRodzajPrzedsiebiorstwa] = useState("");
  const [nip, setNip] = useState("");
  const [inne, setInne] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("users")
      .doc(`03262104439`)
      .collection("projektowe")
      .doc("podstawowe")
      .set({
        dataZgloszenia,
        dataPodpisania,
        wiek,
        wyksztalcenie,
        niepelnosprawnosc,
        dokuemntPotwierdzajacyNiepelnosprawnosc,
        status,
        osobaPracujaca,
        osobaBezrobotna,
        uczaca,
        outplacment,
        bezrobocie,
        numerKonta,
        mniejszoscNarodowa,
        bezdomna,
        niekorzystna,
        ct9,
        pozbawienieWolnosci,
        rolnictwo,
        ubezpieczenie,
        rodzajUbezpieczenia,
        nazwaFirmy,
        miastoFirmy,
        ulicaFirmy,
        numerFirmy,
        kodPocztowyFirmy,
        stanowisko,
        klasyfikacja,
        innaKlasyfikacja,
        zatrudnienieOd,
        zatrudnienieDo,
        rodzajPrzedsiebiorstwa,
        nip,
        inne,
      });
    alert("zapisano!");
  };

  useEffect(() => {
    if (podstawowe) {
      setDataZgloszenia(podstawowe.dataZgloszenia || "");
      setDataPodpisania(podstawowe.dataPodpisania || "");
      setWiek(podstawowe.wiek || "");
      setWyksztalcenie(podstawowe.wyksztalcenie || "");
      setNiepelnosprawnosc(podstawowe.niepelnosprawnosc || "");
      setDokuemntPotwierdzajacyNiepelnosprawnosc(
        podstawowe.dokuemntPotwierdzajacyNiepelnosprawnosc || ""
      );
      setStatus(podstawowe.status || "");
      setOsobaPracujaca(podstawowe.osobaPracujaca || "");
      setOsobaBezrobotna(podstawowe.osobaBezrobotna || "");
      setUczaca(podstawowe.uczaca || "");
      setOutplacment(podstawowe.outplacment || "");
      setBezrobocie(podstawowe.bezrobocie || "");
      setNumerKonta(podstawowe.numerKonta || "");
      setMniejszoscNarodowa(podstawowe.mniejszoscNarodowa || "");
      setBezdomna(podstawowe.bezdomna || "");
      setNiekorzystna(podstawowe.niekorzystna || "");
      setCt9(podstawowe.ct9 || "");
      setPozbawienieWolnosci(podstawowe.pozbawienieWolnosci || "");
      setRolnictwo(podstawowe.rolnictwo || "");
      setUbezpieczenie(podstawowe.ubezpieczenie || "");
      setRodzajUbezpieczenia(podstawowe.rodzajUbezpieczenia || "");
      setNazwaFirmy(podstawowe.nazwaFirmy || "");
      setMiastoFirmy(podstawowe.miastoFirmy || "");
      setUlicaFirmy(podstawowe.ulicaFirmy || "");
      setNumerFirmy(podstawowe.numerFirmy || "");
      setKodPocztowyFirmy(podstawowe.kodPocztowyFirmy || "");
      setStanowisko(podstawowe.stanowisko || "");
      setKlasyfikacja(podstawowe.klasyfikacja || "");
      setInnaKlasyfikacja(podstawowe.innaKlasyfikacja || "");
      setZatrudnienieOd(podstawowe.zatrudnienieOd || "");
      setZatrudnienieDo(podstawowe.zatrudnienieDo || "");
      setRodzajPrzedsiebiorstwa(podstawowe.rodzajPrzedsiebiorstwa || "");
      setNip(podstawowe.nip || "");
      setInne(podstawowe.inne || "");
    }
  }, [podstawowe]);

  const classes = useStyles();
  return (
    <Form>
      <FormLabel>
        Data z??o??enia formularza zg??oszeniowego:
        <FormInput
          type="date"
          value={dataZgloszenia}
          onChange={(e) => setDataZgloszenia(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Data podpisania umowy w projekcie:
        <FormInput
          type="date"
          value={dataPodpisania}
          onChange={(e) => setDataPodpisania(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel style={{ alignItems: "center" }}>
        Wiek w momencie przyst??pienia
        <FormDateContainer>
          <FromDateWrapper>
            <FormSpan>lat:</FormSpan>
            <FormInput type="number"></FormInput>
          </FromDateWrapper>
          <FromDateWrapper>
            <FormSpan>mie??:</FormSpan>
            <FormInput type="number"></FormInput>
          </FromDateWrapper>
        </FormDateContainer>
      </FormLabel>
      <FormLabel>
        Wykszta??ecnie deklarowane w projekcie:
        <FormSelect
          value={wyksztalcenie}
          onChange={(e) => setWyksztalcenie(e.target.value)}
        >
          <FormOption>Podstawowe (ISCED 1)</FormOption>
          <FormOption>Gimnazjalne (ISCED 2)</FormOption>
          <FormOption>Ponadgimnazjalne (ISCED 3)</FormOption>
          <FormOption>Policealne (ISCED 4)</FormOption>
          <FormOption>Wy??sze (ISCED 5-8)</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Niepe??nosprawno????:
        <FormSelect
          value={niepelnosprawnosc}
          onChange={(e) => setNiepelnosprawnosc(e.target.value)}
        >
          <FormOption>Brak</FormOption>
          <FormOption>Stopie?? lekki</FormOption>
          <FormOption>Stopie?? umiarkowany</FormOption>
          <FormOption>Stopie?? znaczny</FormOption>
          <FormOption>Zaburzenia psychiczne</FormOption>
          <FormOption>Odmowa podania informacji</FormOption>
        </FormSelect>
      </FormLabel>
      {niepelnosprawnosc !== "Brak" ? (
        <FormLabel>
          Dokument potwierdzaj??cy niepe??nosprawno????
          <FormSelect
            value={dokuemntPotwierdzajacyNiepelnosprawnosc}
            onChange={(e) =>
              setDokuemntPotwierdzajacyNiepelnosprawnosc(e.target.value)
            }
          >
            <FormOption>Orzeczenie o niepe??nosprawno??ci</FormOption>
            <FormOption>Orzeczenie lek. ZUS</FormOption>
            <FormOption>Orzeczenie lek. KRUS</FormOption>
            <FormOption>
              Orzeczenie lub opinia o stanie zdrowia psychicznego
            </FormOption>
          </FormSelect>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormLabel>
        Status na rynku pracy:
        <FormSelect value={status} onChange={(e) => setStatus(e.target.value)}>
          <FormOption>Osoba pracuj??ca</FormOption>
          <FormOption>Osoba bezrobotna</FormOption>
          <FormOption>Osoba bierna zawodowo</FormOption>
          <FormOption>Outplacment</FormOption>
        </FormSelect>
      </FormLabel>
      {status === "Osoba pracuj??ca" ? (
        <FormLabel>
          Osoba pracuj??ca:
          <FormSelect
            value={osobaPracujaca}
            onChange={(e) => setOsobaPracujaca(e.target.value)}
          >
            <FormOption>Ubogo pracuj??ca</FormOption>
            <FormOption>Umowa cywilnoprawna</FormOption>
            <FormOption>Umowa kr??tkoterminowa</FormOption>
            <FormOption>Dzia??alno???? gospodarcza</FormOption>
            <FormOption>Umowa o prac??</FormOption>
          </FormSelect>
        </FormLabel>
      ) : <></> && status === "Osoba bezrobotna" ? (
        <FormLabel>
          Osoba bezrobotna:
          <FormSelect
            value={osobaBezrobotna}
            onChange={(e) => setOsobaBezrobotna(e.target.value)}
          >
            <FormOption>Zarejestrowana</FormOption>
            <FormOption>Niezarejestrowana</FormOption>
          </FormSelect>
        </FormLabel>
      ) : <></> && status === "Osoba bierna zawodowo" ? (
        <FormLabel>
          Ucz??ca si??:
          <FormSelect
            value={uczaca}
            onChange={(e) => setUczaca(e.target.value)}
          >
            <FormOption>Nie</FormOption>
            <FormOption>Tak</FormOption>
          </FormSelect>
        </FormLabel>
      ) : <></> && status === "Outplacment" ? (
        <FormLabel>
          Osoba pracuj??ca:
          <FormSelect
            value={outplacment}
            onChange={(e) => setOutplacment(e.target.value)}
          >
            <FormOption>Zagro??ona zwolnieniem</FormOption>
            <FormOption>Przewidziana do zwolnienia</FormOption>
            <FormOption>Zwolniona</FormOption>
          </FormSelect>
        </FormLabel>
      ) : (
        <></>
      )}
      {uczaca === "Tak" && status === "Osoba bierna zawodowo" ? (
        <FormLabel>
          Planowa data zako??czenia edukacji:
          <FormInput
            type="date"
            value={koniecEdukacji}
            onChange={(e) => setKoniecEdukacji(e.target.value)}
          ></FormInput>
        </FormLabel>
      ) : (
        <></>
      )}
      <FormLabel>
        Liczba miesi??cy bezrobocia:
        <FormInput
          type="number"
          value={bezrobocie}
          onChange={(e) => setBezrobocie(e.target.value)}
          placeholder="Je??li osoba ma poni??ej 25 lat i nie pracuje 6 m-cy i wi??cej -  jest d??ugotrwale bezrobotna 
2.	Je??li osoba na 25 lat i wi??cej i nie pracuje 12 miesi??cy i wi??cej ??? jest d??ugotrwale bezrobotna
"
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Numer konta bankowego:
        <FormInput
          type="tel"
          value={numerKonta}
          onChange={(e) => setNumerKonta(e.target.value)}
        ></FormInput>
      </FormLabel>
      <FormLabel>
        Nale??y do mniejszo??ci narodowej, etnicznej, migrant, osoba obcego
        pochodzenia:
        <FormSelect
          value={mniejszoscNarodowa}
          onChange={(e) => setMniejszoscNarodowa(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba bezdomna lub dotkni??ta wykluczeniem dost??pu do mieszka??
        <FormSelect
          value={bezdomna}
          onChange={(e) => setBezdomna(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Odmowa podania informacji</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Znajduje si?? w innej niekorzystnej sytuacji spo??ecznej:
        <FormSelect
          value={niekorzystna}
          onChange={(e) => setNiekorzystna(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Odmowa podania informacji</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        By??y uczestnik w ramach CT 9:
        <FormSelect value={ct9} onChange={(e) => setCt9(e.target.value)}>
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba odbywaj??ca kar?? pozbawiena wolno??ci:
        <FormSelect
          value={pozbawienieWolnosci}
          onChange={(e) => setPozbawienieWolnosci(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Osoba odchodz??ca z rolnictwa:
        <FormSelect
          value={rolnictwo}
          onChange={(e) => setRolnictwo(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      <FormLabel>
        Czy uczestnik ma inny tytu?? do ubezpiecze?? spo??ecznych:
        <FormSelect
          value={ubezpieczenie}
          onChange={(e) => setUbezpieczenie(e.target.value)}
        >
          <FormOption>Nie</FormOption>
          <FormOption>Tak</FormOption>
          <FormOption>Nie dotyczny</FormOption>
        </FormSelect>
      </FormLabel>
      {ubezpieczenie === "Tak" ? (
        <FormLabel>
          Ubezpieczenie spo??eczne:
          <FormSelect
            value={rodzajUbezpieczenia}
            onChange={(e) => setRodzajUbezpieczenia(e.target.value)}
          >
            <FormOption>Renta rodzinna</FormOption>
            <FormOption>Emerytura</FormOption>
            <FormOption>Zasi??ek dla bezrobotnych</FormOption>
            <FormOption>Renta z tytu??u niezdonlno??ci do pracy</FormOption>
          </FormSelect>
        </FormLabel>
      ) : (
        <></>
      )}
      {status === "Osoba pracuj??ca" || status === "Outplacment" ? (
        <>
          <FormHeader>Dane pracodawcy:</FormHeader>
          <FormLabel>
            Nazwa firmy:
            <FormInput
              type="text"
              value={nazwaFirmy}
              onChange={(e) => setNazwaFirmy(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Miasto:
            <FormInput
              type="text"
              value={miastoFirmy}
              onChange={(e) => setMiastoFirmy(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Ulica:
            <FormInput
              type="text"
              value={ulicaFirmy}
              onChange={(e) => setUlicaFirmy(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Numer:
            <FormInput
              type="text"
              value={numerFirmy}
              onChange={(e) => setNumerFirmy(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Kod pocztowy:
            <FormInput
              type="text"
              value={kodPocztowyFirmy}
              onChange={(e) => setKodPocztowyFirmy(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Stanowisko pracy u pracodawcy:
            <FormInput
              type="text"
              value={stanowisko}
              onChange={(e) => setStanowisko(e.target.value)}
            ></FormInput>
          </FormLabel>
          <FormLabel>
            Klasyfikacja zawod??w:
            <FormSelect
              value={klasyfikacja}
              onChange={(e) => setKlasyfikacja(e.target.value)}
            >
              <FormOption>Instruktor praktycznej nauki zawodu</FormOption>
              <FormOption>
                Kluczowy pracownik instytucji pomocy i integracji spo??ecznej
              </FormOption>
              <FormOption>Nauczyciel kszta??cenia og??lnego</FormOption>
              <FormOption>Nauczyciel kszta??cenia zawodowego</FormOption>
              <FormOption>Nauczyciel wychowania przedszkolnego</FormOption>
              <FormOption>Pracownik instytucji rynku pracy</FormOption>
              <FormOption>
                Pracownik instytucji systemu ochrony zdrowia
              </FormOption>
              <FormOption>
                Pracownik instytucji systemu wspierania rodzin i pieczy
                zast??pczej{" "}
              </FormOption>
              <FormOption>
                Pracownik instytucji szkolenictwa wy??szego
              </FormOption>
              <FormOption>
                Pracownik o??rodka wsparcia ekonomii spo??ecznej
              </FormOption>
              <FormOption>
                Pracownik poradni psychologiczno-pedagogicznej
              </FormOption>
              <FormOption>Rolnik</FormOption>
              <FormOption>Inne</FormOption>
            </FormSelect>
          </FormLabel>
          {klasyfikacja === "Inne" ? (
            <FormLabel>
              Inne jakie?
              <FormInput
                value={innaKlasyfikacja}
                onChange={(e) => setInnaKlasyfikacja(e.target.value)}
              ></FormInput>
            </FormLabel>
          ) : (
            <></>
          )}
          <FormLabel style={{ alignItems: "center" }}>
            Czas trwania umowy:
            <FormDateContainer>
              <FromDateWrapper>
                <FormSpan>od:</FormSpan>
                <FormInput
                  value={zatrudnienieOd}
                  onChange={(e) => setZatrudnienieOd(e.target.value)}
                  type="date"
                ></FormInput>
              </FromDateWrapper>
              <FromDateWrapper>
                <FormSpan>do:</FormSpan>
                <FormInput
                  value={zatrudnienieDo}
                  onChange={(e) => setZatrudnienieDo(e.target.value)}
                  type="date"
                ></FormInput>
              </FromDateWrapper>
            </FormDateContainer>
          </FormLabel>
          <FormLabel>
            Rodzaj przedsi??biorstwa:
            <FormSelect
              onChange={(e) => setRodzajPrzedsiebiorstwa(e.target.value)}
              value={rodzajPrzedsiebiorstwa}
            >
              <FormOption>Administracja rz??dowa</FormOption>
              <FormOption>Administracja samorz??dowa</FormOption>
              <FormOption>Du??e przedsi??biorstwo</FormOption>
              <FormOption>MM??P</FormOption>
              <FormOption>Organizacja pozarz??dowa</FormOption>
              <FormOption>W??asna dzia??alno????</FormOption>
              <FormOption>Inne</FormOption>
            </FormSelect>
          </FormLabel>
        </>
      ) : (
        <></>
      )}
      {(() => {
        if (rodzajPrzedsiebiorstwa === "W??asna dzia??alno????") {
          return (
            <FormLabel>
              NIP:
              <FormInput
                type="tel"
                value={nip}
                onChange={(e) => setNip(e.target.value)}
              ></FormInput>
            </FormLabel>
          );
        } else if (rodzajPrzedsiebiorstwa === "Inne") {
          return (
            <FormLabel>
              Jakie:
              <FormInput
                type="text"
                value={inne}
                onChange={(e) => setInne(e.target.value)}
              ></FormInput>
            </FormLabel>
          );
        } else {
          return <></>;
        }
      })()}
      <Button
        type="submit"
        variant="outlined"
        onClick={handleSubmit}
        className={classes.button}
      >
        Zapisz
      </Button>
    </Form>
  );
}
