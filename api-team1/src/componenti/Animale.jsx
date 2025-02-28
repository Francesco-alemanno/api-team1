import { useState } from "react";
import { Scontro } from "./Scontro";

export function Animale() {
  const [data, setData] = useState({
    nome: "",
  });

  const [data2, setData2] = useState({
    nome: "",
  });
  const [messaggio, setMessaggio] = useState("");
  const [animale, setAnimale] = useState(null);
  const [animale2, setAnimale2] = useState(null);
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/animali/${data.nome}`,
        {
          headers: { "Content-type": "application/JSON" },
        }
      );
      if (!response) {
        return setMessaggio("animale non trovato ");
      }
      const responseData = await response.json();
      setAnimale(responseData);

      return responseData;
    } catch (error) {
      setMessaggio(error.message);
    }
  };
  // -----
  const handleChange2 = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setData2((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    console.log(name, value);
  };

  const handleSubmit2 = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch(
        `http://localhost:5000/animali/${data2.nome}`,
        {
          headers: { "Content-type": "application/JSON" },
        }
      );
      if (!response) {
        return setMessaggio("animale non trovato ");
      }
      const responseData = await response.json();
      setAnimale2(responseData);

      return responseData;
    } catch (error) {
      setMessaggio(error.message);
    }
  };

  return (
    <div className="animale1">
      <form onSubmit={handleSubmit}>
        <select name="nome" id="animale" onChange={handleChange}>
          <option value="">Seleziona</option>
          <option name="nome" value="cane">
            cane
          </option>
          <option name="nome" value="gatto">
            gatto
          </option>
          <option name="nome" value="elefante">
            elefante
          </option>
          <option name="nome" value="leone">
            leone
          </option>
        </select>
        <button type="submit">Cerca</button>
        {/* {animale && (
          <div className="card">
            <div className="nome-hp">
              <p>Nome: {animale.nome}</p>
              <p>HP:{animale.hp}</p>
            </div>
            <div>
              <img src="https://placehold.co/600x400" alt="placeholder" />
            </div>
            <div className="caratteristiche">
              <p>Caratteristiche: {animale.caratteristiche.join(", ")}</p>
              <p>Attacco:{animale.attacco}</p>
              <p>Abilità speciali: {animale.abilita_speciali}</p>
            </div>
          </div>
        )} */}
      </form>
      {/* animale2 */}
      <div className="animale2">
        <form onSubmit={handleSubmit2}>
          <select name="nome" id="animale" onChange={handleChange2}>
            <option value="">Seleziona</option>
            <option name="nome" value="cane">
              cane
            </option>
            <option name="nome" value="gatto">
              gatto
            </option>
            <option name="nome" value="elefante">
              elefante
            </option>
            <option name="nome" value="leone">
              leone
            </option>
          </select>
          <button type="submit">Cerca</button>
          {/* {animale2 && (
            <div className="card">
              <div className="nome-hp">
                <p>Nome: {animale2.nome}</p>
                <p>HP:{animale2.hp}</p>
              </div>
              <div>
                <img src="https://placehold.co/600x400" alt="placeholder" />
              </div>
              <div className="caratteristiche">
                <p>Caratteristiche: {animale2.caratteristiche.join(", ")}</p>
                <p>Attacco:{animale2.attacco}</p>
                <p>Abilità speciali: {animale2.abilita_speciali}</p>
              </div>
            </div>
          )} */}
        </form>
      </div>
      {animale && animale2 ? <Scontro animale={animale} animale2={animale2}>
        
        </Scontro> : <p>Seleziona i due animali</p> }
      
    </div>

  );
}
