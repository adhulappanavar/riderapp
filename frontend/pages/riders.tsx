import { useQuery, gql } from "@apollo/client";
import { initializeApollo } from "src/apollo";
import {
  Button,
  Card,
  CardBody,
  CardColumns,
  CardImg,
  CardSubtitle
} from "reactstrap";
import { CardText, CardTitle, Col, Row } from "reactstrap";
import Link from "next/link";



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
              <div>
                <div key={i}>{rider.Name}/{rider.Title}</div>
                  <Card
                style={{ width: "30%", margin: "0 10px" }}
                className="h-100"
                key={rider.id}
              >
                <CardImg
                  top={true}
                  style={{ height: 250 }}
                  src={`https://1.bp.blogspot.com/-7YsI4b0LKzI/W1rUibXlLTI/AAAAAAAAHSs/C1W444Ul4MIRVqelm8aGgMqUWG6grLvVwCLcBGAs/s1600/delivery-boy-2.gif}`}
                />
                <CardBody>
                  <CardTitle>{rider.Name}</CardTitle>
                  <CardText>{rider.Title}</CardText>
                  <CardText>{rider.orders[0].OrderStatus}</CardText>

                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/riders/${rider.id}`}
                    href={`/riders?id=${rider.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>
              </div>
        )
      )
    }
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

