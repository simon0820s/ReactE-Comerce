import { useContext } from "react"
import { ShoppingCartContext } from "../../Context"
import { NavLink } from "react-router-dom"
import { ShoppingBagIcon } from '@heroicons/react/24/outline'

const NavBar = () => {

  const context = useContext(ShoppingCartContext);

  const activeStyle = "underline underline-offset-4"
  return (
    <nav className="z-10 top-0  flex justify-between items-center fixed w-full py-5 px-8 text-sm font-light">
      <ul className="flex items-center gap-2">
        <li className="font-semibold text-base">
          <NavLink
            to='/'>
            E-Comerce
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            All
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/clothes'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Clothes
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/electronics'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Electronics
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/furnitures'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Furnitures
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/toys'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Toys
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/others'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Others
          </NavLink>
        </li>
      </ul>
      <ul className="flex items-center gap-2">
        <li className="text-gray-500">
          simon0820s@gmail.com
        </li>
        <li>
          <NavLink
            to='/my-orders'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/my-account'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            My Account
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/sign-in'
            className={({ isActive }) => isActive ? activeStyle : undefined}>
            Sign In
          </NavLink>
        </li>
        <li className="flex items-center gap-1">
          <ShoppingBagIcon className="h-6 w-6 text-gray-900" />{context.count}
        </li>
      </ul>
    </nav>
  )
}

export default NavBar