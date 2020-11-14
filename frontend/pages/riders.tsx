import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";

const MyQuery = gql`
  query MyQuery {
    riders
      {
        id
        Name
        Title
        orders { id
          OrderStatus}
    }
  }
`;

export default function Riders() {
  const { data, loading } = useQuery(MyQuery);

  if (loading) return <span>loading...</span>;

  console.log(data);
  const { riders } = data

  return (
    <div>
      {riders.map((rider, i) => (
        <div key={i}>{rider.Name}/{rider.Title}/{rider.orders[0].OrderStatus}</div>
        )
    )}
    </div>
  )


  // return (
  //   <div>
  //     <pre>{JSON.stringify(data, null, 2)}</pre>
  //   </div>
  // );
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

