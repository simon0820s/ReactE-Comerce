import { createContext, useState } from "react"

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0)
  const [isOpenProductDetail, setIsOpenProductDetail] = useState(false);

  const openProductDetail = () => setIsOpenProductDetail(true);
  const closeProductDetail = () => setIsOpenProductDetail(false);
  return (
    <ShoppingCartContext.Provider value={{
      count,
      setCount,
      openProductDetail,
      closeProductDetail,
      isOpenProductDetail
    }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}