import { useContext } from "react"
import Layout from "../../Components/Layout"
import { ShoppingCartContext } from "../../Context"
import OrderCard from '../../Components/OrderCard'
import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { Link } from "react-router-dom"

const MyOrder = () => {

  const context = useContext(ShoppingCartContext)
  const currentPath = window.location.pathname
  let index = currentPath.substring(currentPath.lastIndexOf('/') + 1)

  if (index === 'last') index = context.order?.length -1

  return (
    <Layout>
      <div className="flex items-center justify-center gap-4">
        <Link to='/my-orders'>
          <ChevronLeftIcon className="w-5 h-5 text-gray-900" />
        </Link>
        <h1 className="text-lg font-medium">My Order</h1>
      </div>
      <div className='flex flex-col w-80'>
        {
          context.order?.[index]?.products.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price} />
          ))
        }
      </div>
    </Layout>
  )
}

export default MyOrder

