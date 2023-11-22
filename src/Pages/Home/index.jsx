import { useState, useEffect} from "react"
import Layout from "../../Components/Layout"
import Card from '../../Components/Card'

const Home = () => {

  const [items, setItems] = useState(null)

  useEffect(() => {
    fetch('https://api.escuelajs.co/api/v1/products')
  },[])

  return (
    <Layout >
      Home
      <Card />
    </Layout>
  )
}

export default Home