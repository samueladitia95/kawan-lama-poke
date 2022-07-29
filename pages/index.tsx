import { Fragment } from "react";
import Head from "next/head";
import { GetServerSideProps } from "next";
import { fetchPoke } from "../utils/fetchPoke";

const Home = ({ pokemonsCount }: { pokemonsCount: number }) => {
  console.log(pokemonsCount);
  return (
    <Fragment>
      <Head>
        <title>Home</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link rel="icon" type="image/png" href="/Logo.png"></link>
      </Head>
      <div>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel amet,
        aperiam sapiente magnam ex corrupti asperiores ducimus similique magni
        ullam dicta suscipit adipisci libero facere odio repellat nostrum, alias
        atque.
      </div>
    </Fragment>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  //! Caching
  //? Lama karena data jumlah jarang berubah
  res.setHeader(
    "Cache-Control",
    "public, s-maxage=1800, stale-while-revalidate=3600"
  );
  //! Untuk mendapatkan jumlah saja
  const data = await fetchPoke<{
    count: number;
    next: string;
    previous: string;
    results: Array<{
      name: string;
      url: string;
    }>;
  }>(`https://pokeapi.co/api/v2/pokemon?limit=1`);

  return {
    props: {
      pokemonsCount: data.count,
    },
  };
};

export default Home;
