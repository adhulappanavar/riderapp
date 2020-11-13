import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";

const MyRiderQuery = gql`
query qriders {
  riders
  	{
      id
      Name
      orders { id
        OrderStatus}
  }
}
`;

export default function Riders() {
  const { data, loading } = useQuery(MyRiderQuery);

  if (loading) return <span>loading...</span>;

  // console.log(data);
  return (
    <div>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export async function getStaticProps() {
  const apolloClient = initializeApollo();

  await apolloClient.query({
    query: MyRiderQuery,
  });

  return {
    props: {
      initialApolloState: apolloClient.cache.extract(),
    },
  };
}

