import React from "react";
// import "./Main.scss";
import "./Style.scss";

const Pokeinfo = ({ data }) => {
  // console.log(data.types[0].type.name);
  const style = "right";

  return (
    <>
      {!data ? (
        ""
      ) : (
        <div className={`${style} ${data.types[0].type.name}`}>
          <h1>{data.name}</h1>

          <img
            // src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${data.id}.png`}
            alt=""
          />

          <div className="abilities">
            {data.abilities.map((poke) => {
              return (
                <>
                  <div className="group">
                    <h2>{poke.ability.name}</h2>
                  </div>
                </>
              );
            })}
          </div>
          <div className="base-stat">
            {data.stats.map((poke) => {
              return (
                <>
                  <h3>
                    {poke.stat.name}:{poke.base_stat}
                  </h3>
                </>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
export default Pokeinfo;
