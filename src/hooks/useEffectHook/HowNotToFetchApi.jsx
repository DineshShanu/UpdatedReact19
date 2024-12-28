import React, { useEffect, useState } from "react";
import "./Pokemon.css";

function HowNotToFetchApi() {
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon/pikachu";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      setPokemon(data);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  if (loading)
    return (
      <div>
        <h3 className="text text-center">Loading...</h3>
      </div>
    );

  if (error) {
    return (
      <div>
        <h3 className="text text-center mt-5">Error: {error.message}</h3>
      </div>
    );
  }

  // if (pokemon) {
  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokeman</h1>
        </header>
        <ul className="card-demo">
          <li className="pokemon-card">
            <figure>
              <img
                src={pokemon.sprites.other.dream_world.front_default}
                alt={pokemon.name}
                className="pokemon-image"
              />
            </figure>
            <h1>{pokemon.name}</h1>
            <div className="grid-three-cols">
              <p className="pokemon-info">
                Height: <span>{pokemon.height}</span>
              </p>
              <p className="pokemon-info">
                Weight: <span>{pokemon.weight}</span>
              </p>
              <p className="pokemon-info">
                Speed: <span>{pokemon.stats[5].base_stat}</span>
              </p>
            </div>
          </li>
        </ul>
      </section>
    </>
  );
}

export default HowNotToFetchApi;