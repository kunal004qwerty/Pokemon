import React from "react";
import "./Style.scss";

const Card = ({ pokemon, loading, infoPokemon }) => {
  // console.log(type);
  const style = "card";
  // console.log(pokemon);

  return (
    <>
      {loading ? (
        <h1>LOADing...</h1>
      ) : (
        pokemon.map((item) => {
          return (
            <>
              <div
                className={`${style} ${item.types[0].type.name}`}
                key={item.id}
                onClick={() => {
                  infoPokemon(item);
                }}
              >
                <h2>{item.id}</h2>
                <img src={item.sprites.front_shiny} alt=""></img>
                {/* <img src={item.sprites.front_default}></img> */}

                <img
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${item.id}.png`}
                  // src={item.sprites.front_default}
                  onerror="this.style.display='none'"
                  alt=""
                ></img>
                <h2>{item.name}</h2>
                <h4>{item.types[0].type.name}-type</h4>
              </div>
            </>
          );
        })
      )}
    </>
  );
};

export default Card;
