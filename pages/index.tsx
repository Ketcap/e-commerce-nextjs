import { useQuery } from "@apollo/client";
import type { NextPage } from "next";

import { client } from "../operations/apollo-client";
import { countryData } from "../operations/queries/getAllData";

const Home: NextPage = ({ countries }: any) => {
  return (
    <>
      {countries.map((country: any) => (
        <div key={country.code}>
          <h3>
            <a></a>
            {country.name}
          </h3>
          <p>
            {country.code} - {country.emoji}
          </p>
        </div>
      ))}
    </>
  );
};

export default Home;

export async function getStaticProps() {
  const { data } = await client.query({
    query: countryData,
  });

  return {
    props: {
      countries: data.countries.slice(0, 4),
    },
  };
}
