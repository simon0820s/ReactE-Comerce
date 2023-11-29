import { XMarkIcon } from "@heroicons/react/24/outline"
import {ChevronRightIcon} from '@heroicons/react/24/outline'

const OrdersCard = props => {
  const { totalPrice, totalProducts } = props

  return (
    <div className="flex gap-2 justify-between items-center border-gray-900 border-2 rounded-lg py-1 px-2 w-80">
      <p className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span className="font-light">01.02.23</span>
          <span className="font-light">{totalProducts} Articles</span>
        </div>
        <span className="font-medium text-lg">${totalPrice}</span>
      </p>
      <ChevronRightIcon className="w-6" />
    </div>
  )
}

export default OrdersCard