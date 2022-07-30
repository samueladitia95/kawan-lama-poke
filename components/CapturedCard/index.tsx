import { useState } from "react";
import { useCapturedCard } from "./useCapturedCard";
import Loading from "../Loading";
import DetailModal from "../DetailModal";

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
      <div onClick={() => setIsModalOpen(true)}>
        <h1 className="dark:text-tDarkPrimary">{pokemon.name}</h1>
        <button
          className="bg-accent1"
          onClick={() => {
            deletePokemon(pokemonId);
          }}
        >
          Delete Pokemon
        </button>
      </div>
      {/* MODAL DETAIL */}
      {isModalOpen && <DetailModal closeModal={setIsModalOpen} />}
    </>
  );
}
