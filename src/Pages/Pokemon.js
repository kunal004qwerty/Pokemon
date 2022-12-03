import React, { useState } from "react";
import "./PokemonStylee.css";
import axios from "axios";

const Pokemon = () => {
  const [PokemonName, setPokemonName] = useState("");
  const [PokemonChosen, setPokemonChosen] = useState(false);
  const [Pokemon, setPokemon] = useState({
    name: "",
    species: "",
    img: "",
    hp: "",
    attack: "",
    deffence: "",
    type: "",
  });

  const SearchPokemon = () => {
    //! for async operation type---- const SearchPokemon = async () => {

    // const response = await axios.get(
    //   `https://pokeapi.co/api/v2/pokemon/${PokemonName}`
    // );
    // setPokemon({
    //   name: PokemonName,
    //   species: response.data.species.name,
    //   img: response.data.sprites.front_default,
    //   hp: response.data.stats[0].base_stat,
    //   attack: response.data.stats[1].base_stat,
    //   deffence: response.data.stats[2].base_stat,
    //   type: response.data.types[0].type.name,
    // });
    // setPokemonChosen(true);

    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${PokemonName}`)
      .then((response) => {
        setPokemon({
          name: PokemonName,
          species: response.data.species.name,
          img: response.data.sprites.front_default,
          hp: response.data.stats[0].base_stat,
          attack: response.data.stats[1].base_stat,
          deffence: response.data.stats[2].base_stat,
          type: response.data.types[0].type.name,
        });
        setPokemonChosen(true);
      });
  };

  return (
    <>
      <div className="Pokemon">
        <div className="Title">
          <h1>Pokemon Status</h1>
          <input
            type="text"
            onChange={(event) => {
              setPokemonName(event.target.value);
              //   console.log(event.target.value)
            }}
          ></input>
          <button onClick={SearchPokemon}>Search Pokemon</button>
        </div>
        <div className="DisplaySection">
          {!PokemonChosen ? (
            <h1>Please choose a pokemon</h1>
          ) : (
            <>
              <h1>{Pokemon.name}</h1>
              <img src={Pokemon.img} alt="" />
              <h3>species: {Pokemon.species}</h3>
              <h3>type: {Pokemon.type}</h3>
              <h3>hp: {Pokemon.hp}</h3>
              <h4>attack: {Pokemon.attack}</h4>
              <h4>deffence: {Pokemon.deffence}</h4>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Pokemon;
