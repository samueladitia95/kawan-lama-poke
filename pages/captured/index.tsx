import { useEffect, useState } from "react";
import Card from "../../components/Card";
import { readSavedPokemons } from "../../utils/readSavedPokemons";
import Head from "next/head";

export default function Captured() {
  const [savedids, setSavedIds] = useState<string[]>([]);

  useEffect(() => {
    const savedPokemonIds = readSavedPokemons();

    setSavedIds(savedPokemonIds || []);
  }, []);

  const deletePokemon = (pokemonId: string) => {
    const newSavedIds: string[] = savedids.filter(
      (el: string) => el !== pokemonId
    );
    setSavedIds(newSavedIds);
    if (!newSavedIds.length) {
      window.localStorage.removeItem("saved_pokemons");
    } else {
      window.localStorage.setItem("saved_pokemons", newSavedIds.join(";"));
    }
  };

  return (
    <>
      <Head>
        <title>My Bag</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/logoTab.png"></link>
      </Head>
      <div>
        <p className="dark:text-tDarkPrimary text-5xl text-center my-4">
          My Bag of Captured Pokemon
        </p>

        <p className="dark:text-tDarkPrimary text-xl text-center my-4">
          Your bag can only hold 10 pokemons
        </p>
        {!savedids.length ? (
          <p className="dark:text-tDarkPrimary text-5xl text-center my-4">
            You Don`t Have Any Pokemons
          </p>
        ) : (
          <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:gap-4 lg:justify-center">
            {savedids.map((el: string) => {
              return (
                <Card key={el} pokemonId={el} deletePokemon={deletePokemon} />
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}
