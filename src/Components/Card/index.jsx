import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { PlusCircleIcon } from '@heroicons/react/24/outline'

const Card = (data) => {

  const context = useContext(ShoppingCartContext)

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => context.openProductDetail()}>
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/40 rounded-lg text-gray-800 text-xs m-2 px-1 py-0.5">{data.data.category.name}</span>
        <img className="w-full h-full object-cover rounded-lg" src={data.data.images[0]} alt={data.data.title} />
        <div
          className="absolute top-0 right-0 flex justify-center items-center w-6 h-6 rounded-full m-2"
          onClick={() => context.setCount(context.count + 1)} >
          <PlusCircleIcon className="h-6 w-6 text-gray-900" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{data.data.title}</span>
        <span className="text-lg font-medium">${data.data.price}</span>
      </p>
    </div>
  )
}

export default Card