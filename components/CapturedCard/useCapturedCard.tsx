import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

export function useCapturedCard(id: string) {
  const { data, error } = useSWR(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
}
