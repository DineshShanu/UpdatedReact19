import React from "react";

const PokemonCard = ({ pokemonData }) => {
  return (
    <>
      <li className="pokemon-card">
        <figure>
          <img
            src={pokemonData.sprites.other.dream_world.front_default}
            alt={pokemonData.name}
            className="pokemon-image"
          />
        </figure>
        <h3 className="text text-center text-success text-uppercase pokemon-name">
          {pokemonData.name}
        </h3>
        <div className="pokemon-info pokemon-highlight">
          <p>
            {pokemonData.types.map((currType) => currType.type.name).join(", ")}
          </p>
        </div>
        <div className="grid-three-cols">
          <p className="pokemon-info">
            Height
            <br />
            <span>{pokemonData.height}</span>
          </p>
          <p className="pokemon-info">
            Weight
            <br />
            <span>{pokemonData.weight}</span>
          </p>
          <p className="pokemon-info">
            Speed
            <br />
            <span>{pokemonData.stats[5].base_stat}</span>
          </p>
        </div>

        <div className="grid-three-cols">
          <div className="pokemon-info">
            <p>
              Experience
              <br />
              {pokemonData.base_experience}
            </p>
          </div>
          <div className="pokemon-info">
            <p>
              Attack
              <br />
              {pokemonData.stats[0].base_stat}
            </p>
          </div>
          <div className="pokemon-info">
            <p>
              Ablities
              <br />
              {pokemonData.abilities
                .map((abilityInfo) => abilityInfo.ability.name)
                .slice(0, 1)
                .join(", ")}
            </p>
          </div>
        </div>
      </li>
    </>
  );
};

export default PokemonCard;
