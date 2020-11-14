import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";
import { graphql } from "react-apollo";

type Rider = {
  Name: string
  Title : string
  orders : Order[]
}

type Order = {
  orderStatus: string

}

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

function RidersGQLServerSideProps({ riders }) {
  { data: { loading, error, restaurants }, search },
  req
) => {
  return (
    <ul>
      {riders.map((rider) => (
        <div>
        <li>{rider.Name} ---- {rider.Title} </li>
         <pre>{JSON.stringify(rider, null, 2)}</pre>
        </div>

      ))}
    </ul>
  )
}

export const getServerSideProps = async () => {
  const res = await fetch('http://localhost:1337/Riders')
  const riders: Rider[] = await res.json()

  console.log(riders)

  return {
    props: {
      riders,
    },
  }
}

export default graphql(MyRiderQuery, {
  props: ({ data }) => ({
    data
  })
})(RidersGQLServerSideProps);
