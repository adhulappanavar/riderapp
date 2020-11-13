type Rider = {
  name: string
  description: string
}


function Riders({ riders }) {
  return (
    <ul>
      {riders.map((rider) => (
        <div>
        <li>{rider.Name} ---- {rider.Title}</li>
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


export default Riders