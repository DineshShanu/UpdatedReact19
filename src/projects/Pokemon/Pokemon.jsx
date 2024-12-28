import React, { useEffect, useState } from "react";
import "./index.css";
import PokemonCard from "./PokemonCard";
import ScrollToTop from "react-scroll-up";

const Pokemon = () => {
  const [pokemon, setPokemon] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  const API = "https://pokeapi.co/api/v2/pokemon?limit=500";
  const fetchPokemon = async () => {
    try {
      const res = await fetch(API);
      const data = await res.json();
      const detailsPokemonData = data.results.map(
        async (currPokemon, index) => {
          const res = await fetch(currPokemon.url);
          const currentPokemonData = await res.json();
          return currentPokemonData;
        }
      );
      const detailedResponse = await Promise.all(detailsPokemonData);
      setPokemon(detailedResponse);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, []);

  const searchData = pokemon.filter((currPokemon) =>
    currPokemon.name.toLowerCase().includes(search.toLowerCase())
  );

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
  return (
    <>
      <section className="container">
        <header>
          <h1>Lets Catch Pokemon</h1>
        </header>
        <div className="pokemon-search">
          <input
            type="text"
            placeholder="Search Pokemon"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div>
          <ul className="cards">
            {searchData.map((data) => {
              return <PokemonCard pokemonData={data} key={data.id} />;
            })}
          </ul>
        </div>
      </section>
      <ScrollToTop showUnder={500}>
        <img
          src="https://cdn-icons-png.flaticon.com/512/892/892692.png"
          height={50}
          width={50}
          alt="Arrow-Up"
        />
      </ScrollToTop>
    </>
  );
};

export default Pokemon;
