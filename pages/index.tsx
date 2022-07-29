import { Fragment } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { fetcher } from "../utils/fetcher";
import Card from "../components/Card";

const Home = ({ randomPokemonUrls }: { randomPokemonUrls: string[] }) => {
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/Logo.png"></link>
      </Head>
      <div>
        <h1 className="dark:text-tDarkPrimary text-5xl text-center my-4">
          Random Pokemons
        </h1>
        {randomPokemonUrls.map((url: string, index: number) => {
          return <Card key={index} url={url} />;
        })}
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=10, stale-while-revalidate=59"
  );

  const randomOffset = Math.floor(Math.random() * 1149);
  const data = await fetcher(
    `https://pokeapi.co/api/v2/pokemon?offset=${randomOffset}&limit=5`
  );

  const randomPokemonUrls: string[] = data.results.map(
    (el: { name: string; url: string }) => el.url
  );
  return {
    props: {
      randomPokemonUrls,
    },
  };
};

export default Home;
