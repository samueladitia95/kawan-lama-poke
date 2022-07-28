import { Fragment } from "react";
import Head from "next/head";

const Home = () => {
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

export default Home;
