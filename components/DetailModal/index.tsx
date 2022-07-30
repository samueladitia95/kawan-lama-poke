import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import type { Pokemon } from "../../type";
import { capitalizeFirstLetter } from "../../utils/capiralizeFirstLetter";
import { typeColor } from "../../utils/typeColor";

export default function DetailModal({
  closeModal,
  pokemon,
}: {
  closeModal: Dispatch<SetStateAction<boolean>>;
  pokemon: Pokemon;
}) {
  return (
    <>
      <div className="bg-black opacity-40 fixed h-screen w-screen top-0 left-0 z-40"></div>
      <div className="overflow-y-auto overflow-x-hidden fixed z-50 w-full inset-0 h-full flex justify-center ">
        <div className="relative p-4 w-full max-w-2xl h-full md:h-auto ">
          <div className="relative bg-white rounded-xl shadow dark:bg-bDarkPrimary flex flex-col items-stretch gap-6">
            <div className="flex justify-between items-center p-5 rounded-t border-b">
              <p className="text-2xl w-full text-center">
                <span className="text-sm font-light">#${pokemon.order}</span>{" "}
                {capitalizeFirstLetter(pokemon.name)}
              </p>
              <button
                type="button"
                className="text-tLightPrimary dark:text-tDarkPrimary bg-transparent hover:bg-bLightSecondary dark:hover:bg-bDarkSecondary rounded-lg text-sm p-1.5 ml-auto inline-flex items-center"
                onClick={() => closeModal(false)}
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"></path>
                </svg>
              </button>
            </div>

            <Image
              src={
                pokemon.sprites.other["dream_world"].front_default
                  ? pokemon.sprites.other["dream_world"].front_default
                  : pokemon.sprites.other["official-artwork"].front_default
              }
              width={350}
              height={350}
              alt="Front"
            />
            <div className="p-5 flex gap-20">
              <div>
                <p className="font-semibold text-lg">Type</p>
                <div className="flex gap-4">
                  {pokemon.types.map((el) => (
                    <div
                      key={el.slot}
                      className="rounded-lg px-3 my-2 text-lg font-semibold"
                      style={{ backgroundColor: typeColor[el.type.name] }}
                    >
                      {capitalizeFirstLetter(el.type.name)}
                    </div>
                  ))}
                </div>

                <p className="font-semibold text-lg">Abilities</p>
                <div>
                  {pokemon.abilities.map((el, index) => (
                    <li key={index} className="text-sm">
                      {el.ability.name}
                    </li>
                  ))}
                </div>

                <p className="font-semibold text-lg">Moves</p>
                <div>
                  {pokemon.moves.slice(0, 10).map((el, index) => (
                    <li key={index}>{el.move.name}</li>
                  ))}
                </div>
              </div>

              <div className="flex-1">
                <p className="font-semibold text-lg">Stat</p>
                <div>
                  {pokemon.stats.map((el, index) => {
                    return (
                      <div key={index}>
                        <p className="text-base">{el.stat.name} : </p>
                        <div className="flex gap-1 items-center">
                          {Array(Math.ceil(el.base_stat / 10))
                            .fill("")
                            .map((_, index) => {
                              return (
                                <div
                                  key={index}
                                  className="w-4 h-4 bg-accent1 rounded-full"
                                ></div>
                              );
                            })}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
