import { useCard } from "./useCard";
import Loading from "../Loading";

export default function Card({ url }: { url: string }) {
  const { isLoading, pokemon } = useCard(url);
  console.log(pokemon);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div>
      <h1 className="dark:text-tDarkPrimary">{pokemon.name}</h1>
    </div>
  );
}
