import { useState, useEffect } from "react";
import { useCard } from "./useCard";
import Loading from "../Loading";
import DetailModal from "../DetailModal";
import { readSavedPokemons } from "../../utils/readSavedPokemons";
import Image from "next/image";

export default function Card({ url }: { url: string }) {
  const { isLoading, pokemon } = useCard(url);
  const [isCaptured, setIsCaptured] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  useEffect(() => {
    if (pokemon) {
      const savedPokemons = readSavedPokemons();

      if (savedPokemons && savedPokemons.includes(String(pokemon.id))) {
        setIsCaptured(true);
      }
    }
  }, [pokemon]);

  const savePokemon = () => {
    const stringId = String(pokemon.id);
    const savedPokemons = readSavedPokemons();

    if (isCaptured) {
      console.log(`duplicates`);
    } else if (savedPokemons && savedPokemons.length >= 10) {
      console.log(`too Long`);
    } else {
      savedPokemons?.push(stringId);
      window.localStorage.setItem(
        "saved_pokemons",
        savedPokemons ? savedPokemons.join(";") : stringId
      );
      setIsCaptured(true);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <>
      <div
        onClick={() => setIsModalOpen(true)}
        className="my-4 p-4 rounded-lg bg-bLightSecondary dark:bg-bDarkSecondary"
      >
        <div className="flex">
          <Image
            src={pokemon.sprites.other["dream_world"].front_default}
            alt="Pokemon List"
            width={180}
            height={180}
          />
          <div>
            <p className="dark:text-tDarkPrimary">{pokemon.name}</p>
            <button className="bg-accent1" onClick={savePokemon}>
              {isCaptured ? "Already Captured" : "Capture"}
            </button>
          </div>
        </div>
      </div>

      {/* MODAL DETAIL */}
      {isModalOpen && <DetailModal closeModal={setIsModalOpen} />}
    </>
  );
}
