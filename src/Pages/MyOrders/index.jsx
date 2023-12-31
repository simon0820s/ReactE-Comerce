import { useContext } from "react"
import Layout from "../../Components/Layout"
import OrdersCard from "../../Components/OrdersCard"
import { ShoppingCartContext } from "../../Context"
import { Link } from "react-router-dom"

const MyOrders = () => {

  const context = useContext(ShoppingCartContext)
  
  return (
    <Layout>
      <div className="flex flex-col gap-2">
        <h1 className="font-medium">My Orders</h1>
        {
          context.order.map((order, index) => (
            <Link key={index} to={`/my-orders/${index}`}>
              <OrdersCard
                totalPrice={order.totalPrice}
                totalProducts={order.totalProducts} />
            </Link>
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrders