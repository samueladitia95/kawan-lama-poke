import useSWR from "swr";
import { fetcher } from "../../utils/fetcher";

export function useCard(url: string) {
  const { data, error } = useSWR(url, fetcher);

  return {
    pokemon: data,
    isLoading: !error && !data,
    isError: error,
  };
}
