import "../styles/globals.css";
import type { AppProps } from "next/app";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  useQuery,
  gql,
} from "@apollo/client";
import { client } from "../operations/apollo-client";

function MyApp({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />;
    </ApolloProvider>
  );
}

export default MyApp;
