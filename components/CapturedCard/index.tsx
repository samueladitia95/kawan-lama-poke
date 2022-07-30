import { useState } from "react";
import { useCapturedCard } from "./useCapturedCard";
import Loading from "../Loading";
import DetailModal from "../DetailModal";
import Image from "next/image";
import { capitalizeFirstLetter } from "../../utils/capiralizeFirstLetter";
import { typeColor } from "../../utils/typeColor";

export default function CapturedCard({
  pokemonId,
  deletePokemon,
}: {
  pokemonId: string;
  deletePokemon: (pokemonId: string) => void;
}) {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const { isLoading, pokemon } = useCapturedCard(pokemonId);

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
              src={pokemon.sprites.other["official-artwork"].front_default}
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
              <button
                className=" bg-bLightPrimary dark:bg-bDarkPrimary dark:hover:bg-accent1 p-3 hover:bg-accent1 hover:bg-opacity-80 rounded-full transition ease-in-out delay-100 hover:scale-110 w-full"
                onClick={() => {
                  deletePokemon(pokemonId);
                }}
              >
                Release Pokemon
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* MODAL DETAIL */}
      {isModalOpen && <DetailModal closeModal={setIsModalOpen} />}
    </>
  );
}
