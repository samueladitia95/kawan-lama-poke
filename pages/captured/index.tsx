import { useEffect, useState } from "react";
import CapturedCard from "../../components/CapturedCard";
import { readSavedPokemons } from "../../utils/readSavedPokemons";

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
    window.localStorage.setItem("saved_pokemons", newSavedIds.join(";"));
  };

  return (
    <div>
      {savedids.map((el: string) => {
        return (
          <CapturedCard key={el} pokemonId={el} deletePokemon={deletePokemon} />
        );
      })}
    </div>
  );
}
