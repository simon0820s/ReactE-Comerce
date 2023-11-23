import XMarkIcon from '@heroicons/react/24/solid/XMarkIcon'
import { useContext } from 'react'
import {ShoppingCartContext} from '../../Context'
import './styles.css'

const ProductDetail = () => {

  const context = useContext(ShoppingCartContext)

  return (
    <aside
      className={`${context.isOpenProductDetail ? 'flex' : 'hidden'} product-detail flex flex-col fixed right-0 border-black rounded-lg bg-white`}>
      <div className='flex justify-between items-center p-6'>
        <h2 className='font-medium text-xl'>Detail</h2>
        <div>
          <XMarkIcon
           className='h-6 w-6 text-black cursor-pointer'
           onClick={() =>  context.closeProductDetail()} />
        </div>
      </div>
    </aside >
  )
}

export default ProductDetail