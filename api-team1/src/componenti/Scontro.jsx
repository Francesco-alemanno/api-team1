import { useState } from "react";

export function Scontro({ animale, animale2 }) {
  const [messaggio, setMessaggio] = useState("");
  const [attaccoAnimale, setAttaccoAnimale] = useState(animale.attacco);
  const [attaccoAnimale2, setAttaccoAnimale2] = useState(animale2.attacco);
  let [hpAnimale, setHpAnimale] = useState(animale.hp);
  let [hpAnimale2, setHpAnimale2] = useState(animale2.hp);

  const scontro = () => {
    let interval = setInterval(() => {
      if (hpAnimale > 0 && hpAnimale2 > 0) {
        if (hpAnimale >= hpAnimale2) {
          setHpAnimale((hpAnimale -= attaccoAnimale2));
          setMessaggio(
            `${animale2.nome} attacca ${animale.nome} con ${
              animale2.caratteristiche[
                Math.floor(Math.random() * animale2.caratteristiche.length)
              ]
            }`
          );
          console.log(hpAnimale);
        } else if (hpAnimale2 >= hpAnimale) {
          setHpAnimale2((hpAnimale2 -= attaccoAnimale));
          setMessaggio(
            `${animale.nome} attacca ${animale2.nome} con ${
              animale.caratteristiche[
                Math.floor(Math.random() * animale.caratteristiche.length)
              ]
            }`
          );
          console.log(hpAnimale2);
        }
      } else {
        clearInterval(interval);
        if (hpAnimale > 0) {
          setMessaggio(`${animale.nome} ha battuto ${animale2.nome}`);
        } else {
          setMessaggio(`${animale2.nome} ha battuto ${animale.nome}`);
        }
      }
    }, 2000);
  };

  return (
    <div >
      {animale && animale2 && (
        <>
        <p>scontro tra {animale.nome} e {animale2.nome}</p>
        <button onClick={() => scontro()}>Scontro!</button>
        {messaggio && <p>{messaggio}</p>}
        <div className="box">
          
          
          {animale2 &&  <div className="card">
              <div className="nome-hp">
                <p>Nome: {animale2.nome}</p>
                <p>HP:{hpAnimale2}</p>
              </div>
              <div className="img">
                <img src="https://placehold.co/600x400" alt="placeholder" />
              </div>
              <div className="caratteristiche">
                <p>Caratteristiche: {animale2.caratteristiche.join(", ")}</p>
                <p>Attacco:{animale2.attacco}</p>
                <p>Abilità speciali: {animale2.abilita_speciali}</p>
              </div>
            </div> }
            {animale &&  <div className="card">
              <div className="nome-hp">
                <p>Nome: {animale.nome}</p>
                <p>HP:{hpAnimale}</p>
              </div>
              <div className="img">
                <img src="https://placehold.co/600x400" alt="placeholder" />
              </div>
              <div className="caratteristiche">
                <p>Caratteristiche: {animale.caratteristiche.join(", ")}</p>
                <p>Attacco:{animale.attacco}</p>
                <p>Abilità speciali: {animale.abilita_speciali}</p>
              </div>
            </div> }
         
          
          
        </div> 
        </>
        
       
      )}
    </div>
  );
}
