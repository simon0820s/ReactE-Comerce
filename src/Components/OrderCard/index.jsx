import { XMarkIcon } from "@heroicons/react/24/outline"

const OrderCard = props => {
  const { id, title, imageUrl, price, handleDelete } = props

  let renderXMarkIcon
  if (handleDelete) {
    renderXMarkIcon = <XMarkIcon onClick={() => handleDelete(id)} className="h-6 w-6 text-gray-900 cursor-pointer" />
  }

  return (
    <div className="flex justify-between items-center p-2">

      <div className="flex items-center gap-2 px-2">
        <figure className="w-20 h-20">
          <img className="w-full h-full rounded-lg object-cover" src={imageUrl} alt={title} />
        </figure>
        <p className="text-sm font-light">{title}</p>
      </div>


      <div className="flex items-center gap-1 px-2">
        <p className="text-lg font-medium">${price}</p>
        {renderXMarkIcon}
      </div>

    </div>
  )
}

export default OrderCard