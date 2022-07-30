import { ChangeEvent, FormEvent, Fragment, useEffect, useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { fetcher } from "../utils/fetcher";
import Card from "../components/Card";
import { Name } from "../type";
import { readSavedPokemons } from "../utils/readSavedPokemons";

const Home = ({ pokemons, count }: { pokemons: Name[]; count: number }) => {
  const [isMax, setIsMax] = useState<boolean>(false);
  const [randomPokemons, setRandomPokemons] = useState<Name[]>([]);
  const [query, setQuery] = useState<string>("");

  useEffect(() => {
    const randomPokemonUrls: Name[] = Array(5)
      .fill("")
      .map(() => {
        return pokemons[Math.floor(Math.random() * count)];
      });
    setRandomPokemons(randomPokemonUrls);
  }, [pokemons, count]);

  useEffect(() => {
    checkMax();
  }, [randomPokemons]);

  const checkMax = () => {
    const savedPokemons = readSavedPokemons();

    if (savedPokemons && savedPokemons.length >= 10) {
      setIsMax(true);
    } else {
      setIsMax(false);
    }
  };

  const handleSearch = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let randomPokemonUrls: Name[] = pokemons.filter((el) => {
      const regex = new RegExp(query.toLocaleLowerCase());
      return el.name.match(regex);
    });
    if (randomPokemonUrls.length > 5) {
      randomPokemonUrls = randomPokemonUrls.slice(0, 5);
    }

    setRandomPokemons(randomPokemonUrls);
  };

  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/Logo.png"></link>
      </Head>
      <div>
        <p className="dark:text-tDarkPrimary text-5xl text-center my-4">
          You Found {randomPokemons.length} Random Pokemons
        </p>
        <p className="dark:text-tDarkPrimary text-xl text-center my-4">
          or you can search for it
        </p>
        <div className="flex justify-center">
          <form
            className="flex gap-2"
            onSubmit={(event: FormEvent<HTMLFormElement>) => {
              handleSearch(event);
            }}
          >
            <input
              className="border-tLightPrimary border-2 p-2 rounded-lg"
              type="text"
              name="search"
              placeholder="Search with pokemon name"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                setQuery(event.target.value);
              }}
              value={query}
            />
            <button className="bg-bLightSecondary dark:bg-bDarkSecondary dark:hover:bg-accent1 p-3 hover:bg-accent1 hover:bg-opacity-80 rounded-full transition ease-in-out delay-100 hover:scale-110">
              Search
            </button>
          </form>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:gap-4 lg:justify-center">
          {randomPokemons.map(({ url }, index: number) => {
            return (
              <Card key={index} url={url} isMax={isMax} checkMax={checkMax} />
            );
          })}
        </div>
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1800, stale-while-revalidate=3600"
  );

  //! Just to get total pokemons
  const { count } = await fetcher(`https://pokeapi.co/api/v2/pokemon?limit=1`);
  const data = await fetcher(
    `https://pokeapi.co/api/v2/pokemon?limit=${count}`
  );

  const pokemons: Name[] = data.results;
  return {
    props: {
      pokemons,
      count,
    },
  };
};

export default Home;
