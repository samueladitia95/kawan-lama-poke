import { useCapturedCard } from "./useCapturedCard";
import Loading from "../Loading";

export default function CapturedCard({
  pokemonId,
  deletePokemon,
}: {
  pokemonId: string;
  deletePokemon: (pokemonId: string) => void;
}) {
  const { isLoading, pokemon } = useCapturedCard(pokemonId);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
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
  );
}
