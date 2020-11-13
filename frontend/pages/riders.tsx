import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";

const MyQuery = gql`
  query MyQuery {
      riders{
          name
      }
  }
`;

export default function Riders() {
  const { data, loading } = useQuery(MyQuery);

  if (loading) return <span>loading...</span>;

  console.log(data);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MyQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };


  
}

