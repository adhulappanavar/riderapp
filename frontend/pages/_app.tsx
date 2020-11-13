import { ApolloProvider } from "@apollo/client";
import { useApollo } from "src/apollo";
import "../styles/globals.css";
import Layout from "../components/Layout";


function MyApp({ Component, pageProps }) {


  const client = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={client}>
          <Layout isAuthenticated {...pageProps}>
          <Component {...pageProps} />
        </Layout>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
