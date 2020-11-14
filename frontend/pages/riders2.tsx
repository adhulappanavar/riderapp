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


type Rider = {
  name: string
  description: string
}


function Riders({ riders }) {
  return (
    <div>
          {riders.map((rider) => (
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
                </CardBody>
                <div className="card-footer">
                  <Link
                    as={`/riders/${rider.id}`}
                    href={`/riders?id=${rider.id}`}
                  >
                    <a className="btn btn-primary">View</a>
                  </Link>
                </div>
              </Card>))}
    </div>
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


export default Riders