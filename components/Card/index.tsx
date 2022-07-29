import { useCard } from "./useCard";

export default function Card({ url }: { url: string }) {
  const { pokemon, isLoading, isError } = useCard(url);
  console.log(pokemon ? pokemon.id : "", isLoading, isError);
  return (
    <div>
      <h1 className="dark:text-tDarkPrimary">This is a card</h1>
    </div>
  );
}
