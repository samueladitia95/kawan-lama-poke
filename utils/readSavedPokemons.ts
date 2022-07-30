export const readSavedPokemons = (): string[] | undefined => {
  return window.localStorage.getItem("saved_pokemons")?.split(";");
};
