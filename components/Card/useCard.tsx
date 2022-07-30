import useSWR from "swr";
import { Pokemon } from "../../type";
import { fetcher } from "../../utils/fetcher";

export function useCard(url: string) {
  const { data, error } = useSWR(url, fetcher);
  const pokemon: Pokemon = data;
  return {
    pokemon,
    isLoading: !error && !data,
    isError: error,
  };
}
