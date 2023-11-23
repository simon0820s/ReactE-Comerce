import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'
import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import './styles.css'

const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)
  console.log(context.productToShow)

  return (
    <aside
      className={`${context.isOpenProductDetail ? 'flex' : 'hidden'} z-10 product-detail flex flex-col fixed right-0 border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeProductDetail()} />
        </div>
      </div>
      <figure className='px-6'>
        <img
          className='w-full h-full rounded-lg'
          src={context.productToShow.images[0]}
          alt={context.productToShow.title} />
      </figure>
      <p className='flex flex-col p-6'>
        <span className='font-medium text-2xl mb-1'>${context.productToShow.price}</span>
        <span className='font-medium text-xl'>{context.productToShow.title}</span>
        <span className='font-light text-sm'>{context.productToShow.description}</span>
      </p>
    </aside >
  )
}

export default ProductDetail