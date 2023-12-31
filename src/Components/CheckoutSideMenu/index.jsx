import { useContext } from 'react'
import { XMarkIcon } from '@heroicons/react/24/outline'
import { ShoppingCartContext } from '../../Context'
import OrderCard from '../OrderCard'
import { totalPrice } from '../../utils'
import './styles.css'
import { Link } from 'react-router-dom'

const CheckoutSideMenu = () => {

  const context = useContext(ShoppingCartContext)

  const handleDelete = (id) => {
    const filteredProducts = context.cartProducts.filter(product => product.id != id)
    context.setCartProducts(filteredProducts)
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.03',
      products: context.cartProducts,
      totalProducts: context.cartProducts.length,
      totalPrice: totalPrice(context.cartProducts)
    }

    context.setOrder([...context.order, orderToAdd])
    context.setCartProducts([])
  }

  return (
    <aside
      className={`${context.isOpenChekcoutSideMenu ? 'flex' : 'hidden'} z-10 checkout-side-menu flex flex-col fixed right-0 border-black rounded-lg bg-white bg-opacity-95`}>
      <div className='flex justify-between items-center px-4 py-2'>
        <h2 className='font-medium text-xl'>My Order</h2>
        <div>
          <XMarkIcon
            className='h-6 w-6 text-black cursor-pointer'
            onClick={() => context.closeCheckoutSideMenu()} />
        </div>
      </div>
      <div className='flex-1 px-4 overflow-y-scroll'>
        {
          context.cartProducts.map(product => (
            <OrderCard
              key={product.id}
              id={product.id}
              title={product.title}
              imageUrl={product.images}
              price={product.price}
              handleDelete={handleDelete} />

          ))
        }
      </div>
      <div className='px-8 py-2'>
        <p className='flex items-center gap-1 text-lg'>
          <span >Total:</span>
          <span className='font-medium'>${totalPrice(context.cartProducts)}</span>
        </p>
        <Link to='/my-orders/last'>
          <button className='w-full mb-2 bg-gray-950 px-4 py-2 text-neutral-100 rounded-lg' onClick={() => handleCheckout()}>Checkout</button>
        </Link>
      </div>
    </aside >
  )
}

export default CheckoutSideMenu