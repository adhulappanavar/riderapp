import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";

const MyQuery = gql`
query qRestaurant {
  restaurants
  	{
      RestaurantName
  	}
}
`;

export default function Restaurants() {
  const { data, loading } = useQuery(MyQuery);

  if (loading) return <span>loading...</span>;

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

