
import { XMarkIcon } from "@heroicons/react/24/outline"

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex justify-between items-center p-2 border-gray-900">
      <p>
        <span>01.02.23</span>
        <span>{totalProducts}</span>
        <span>{totalPrice}</span>
      </p>

    </div>
  )
}

export default OrdersCard