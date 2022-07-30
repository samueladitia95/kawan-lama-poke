import { Fragment, useState } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { fetcher } from "../utils/fetcher";
import Card from "../components/Card";
import { Name } from "../type";

const Home = ({ randomPokemonUrls }: { randomPokemonUrls: Name[] }) => {
  const [isMax, setIsMax] = useState<boolean>(false);

  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/Logo.png"></link>
      </Head>
      <div>
        <p className="dark:text-tDarkPrimary text-5xl text-center my-4">
          You Found 5 Random Pokemons
        </p>
        <p className="dark:text-tDarkPrimary text-xl text-center my-4">
          Catch Them All
        </p>
        <div className="flex flex-col items-center lg:flex-row lg:flex-wrap lg:gap-4 lg:justify-center">
          {randomPokemonUrls.map(({ url }, index: number) => {
            return (
              <Card key={index} url={url} isMax={isMax} setIsMax={setIsMax} />
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

  // const randomOffset = Math.floor(Math.random() * 1149);
  const data = await fetcher(`https://pokeapi.co/api/v2/pokemon?limit=1154`);

  const pokemons: Name[] = data.results;
  const randomPokemonUrls: Name[] = Array(5)
    .fill("")
    .map(() => {
      return pokemons[Math.floor(Math.random() * 1154)];
    });
  return {
    props: {
      randomPokemonUrls,
    },
  };
};

export default Home;
