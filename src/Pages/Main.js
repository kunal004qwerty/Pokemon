import React, { useEffect, useState } from "react";
// import "./Main.scss";
import "./Style.scss";
import Card from "./Card.js";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";

const Main = () => {
  const [pokemonData, setPokemonData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState(" https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();

  const pokeFun = async () => {
    setLoading(true); // to show loading affect
    const res = await axios.get(url);
    // console.log(res.data); // here we have next and previous object we store in state
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    //console.log(res.data.results);
    getPokemon(res.data.results);
    setLoading(false);
    // console.log(res.data.results);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      // console.log(item.url);
      const result = await axios.get(item.url);
      // console.log(result);
      // console.log(result.data.types[0].type.name);

      setPokemonData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1)); //! to sorting a array in correct order number like 1,2,3,4,5..
        return state;
      });
    });
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <div>
      <div className="title">
        <h1>POKEMON</h1>
      </div>
      <div className="container">
        <div className="grid">
          {" "}
          <div className="btn-group">
            {prevUrl && (
              <button
                onClick={() => {
                  setPokemonData([]);
                  setUrl(prevUrl);
                }}
              >
                Previous
              </button>
            )}

            {nextUrl && (
              <button
                onClick={() => {
                  setPokemonData([]);
                  setUrl(nextUrl);
                }}
              >
                Next
              </button>
            )}
          </div>
          <div className="left-content">
            <Card
              pokemon={pokemonData}
              loading={loading}
              infoPokemon={(poke) => setPokeDex(poke)}
            />
          </div>{" "}
        </div>

        <div className="right-content">
          <Pokeinfo data={pokeDex} />
        </div>
      </div>
      <div className="btn-group">
        {prevUrl && (
          <button
            onClick={() => {
              setPokemonData([]);
              setUrl(prevUrl);
            }}
          >
            Previous
          </button>
        )}

        {nextUrl && (
          <button
            onClick={() => {
              setPokemonData([]);
              setUrl(nextUrl);
            }}
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default Main;
