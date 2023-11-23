import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {

  // Shopping Cart
  const [count, setCount] = useState(0)
  const [cartProducts, setCartProducts] = useState([])


  // Checkout side menu - Open/Close
  const [isOpenChekcoutSideMenu, setIsOpenCheckoutSideMenu] = useState(false);
  const openCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(true);
  const closeCheckoutSideMenu = () => setIsOpenCheckoutSideMenu(false);

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
      setProductToShow,
      cartProducts,
      setCartProducts,
      isOpenChekcoutSideMenu,
      setIsOpenCheckoutSideMenu,
      openCheckoutSideMenu,
      closeCheckoutSideMenu
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}