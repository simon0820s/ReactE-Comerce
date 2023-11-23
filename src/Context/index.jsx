import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  // Shopping Cart - Increment Quantity
  const [count, setCount] = useState(0)

  // Product Detail - Open/Close
  const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);
  const openProductDetail = () => setIsOpenProductDetail(true);
  const closeProductDetail = () => setIsOpenProductDetail(false);


  // Product Detail - Show product
  const [productToShow, setProductToShow] = useState({})

  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isOpenProductDetail,
      productToShow,
      setProductToShow
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}