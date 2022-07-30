import { useState, useEffect, Dispatch, SetStateAction } from "react";
import { useCard } from "./useCard";
import Loading from "../Loading";
import DetailModal from "../DetailModal";
import { readSavedPokemons } from "../../utils/readSavedPokemons";
import Image from "next/image";
import { capitalizeFirstLetter } from "../../utils/capiralizeFirstLetter";
import { typeColor } from "../../utils/typeColor";

export default function Card({
  url,
  pokemonId,
  deletePokemon,
  isMax,
  setIsMax,
}: {
  url?: string;
  pokemonId?: string;
  deletePokemon?: (pokemonId: string) => void;
  isMax?: boolean;
  setIsMax?: Dispatch<SetStateAction<boolean>>;
}) {
  const { isLoading, pokemon } = useCard(
    url ? url : `https://pokeapi.co/api/v2/pokemon/${pokemonId}`
  );
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

  useEffect(() => {
    if (setIsMax) {
      const savedPokemons = readSavedPokemons();
      if (savedPokemons && savedPokemons.length >= 10) {
        setIsMax(true);
      } else {
        setIsMax(false);
      }
    }
  }, [isCaptured, setIsMax]);

  const savePokemon = () => {
    const stringId = String(pokemon.id);
    const savedPokemons = readSavedPokemons();

    if (!savedPokemons || (savedPokemons && savedPokemons.length < 10)) {
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
      <div className="my-4 py-4 px-2 rounded-lg bg-bLightSecondary dark:bg-bDarkSecondary w-full sm:max-w-xl">
        <div className="flex gap-4">
          <div
            className="bg-accent1/20 rounded-full cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            <Image
              src={
                pokemon.sprites.other["dream_world"].front_default
                  ? pokemon.sprites.other["dream_world"].front_default
                  : pokemon.sprites.other["official-artwork"].front_default
              }
              alt="Pokemon List"
              width={180}
              height={180}
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <p className="dark:text-tDarkPrimary text-xl">
              <span className="text-sm font-light">#${pokemon.order}</span>{" "}
              {capitalizeFirstLetter(pokemon.name)}
            </p>
            <div className="flex gap-2 text-tDarkPrimary font-semibold">
              {pokemon.types.map((el) => (
                <div
                  key={el.slot}
                  className="rounded-lg px-3 my-2 text-sm"
                  style={{ backgroundColor: typeColor[el.type.name] }}
                >
                  {capitalizeFirstLetter(el.type.name)}
                </div>
              ))}
            </div>

            <div className="text-sm">
              <p>Height : {pokemon.height * 10} cm</p>
              <p>Weight : {pokemon.weight / 10} kg</p>
            </div>

            <div className="flex-1 py-5 pr-4">
              {deletePokemon && pokemonId ? (
                <button
                  className=" bg-bLightPrimary dark:bg-bDarkPrimary dark:hover:bg-accent1 p-3 hover:bg-accent1 hover:bg-opacity-80 rounded-full transition ease-in-out delay-100 hover:scale-110 w-full"
                  onClick={() => {
                    deletePokemon(pokemonId);
                  }}
                >
                  Release Pokemon
                </button>
              ) : (
                <button
                  className={`bg-bLightPrimary dark:bg-bDarkPrimary p-3 rounded-full transition ease-in-out delay-100 w-full ${
                    !isCaptured && !isMax
                      ? "hover:bg-accent1 hover:bg-opacity-80 hover:scale-110 dark:hover:bg-accent1"
                      : ""
                  }`}
                  onClick={savePokemon}
                  disabled={isCaptured || isMax}
                >
                  {isCaptured
                    ? "Already Captured"
                    : isMax
                    ? "You already have too many"
                    : "Capture"}
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* MODAL DETAIL */}
      {isModalOpen && (
        <DetailModal closeModal={setIsModalOpen} pokemon={pokemon} />
      )}
    </>
  );
}
