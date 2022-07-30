import useSWR from "swr";
import { Pokemon } from "../../type";
import { fetcher } from "../../utils/fetcher";

export function useCapturedCard(id: string) {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );

  const pokemon: Pokemon = data;
  return {
    pokemon,
    isLoading: !error && !data,
    isError: error,
  };
}
