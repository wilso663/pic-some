import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import {Context} from '../Context'

function Header() {
  const cartContext = useContext(Context)

  function cartIcon() {
    if(cartContext.hasItems()){
      return <i className="ri-shopping-cart-fill ri-fw ri-2x"></i>
    } else {
      return <i className="ri-shopping-cart-line ri-fw ri-2x"></i>
    }
  }

  return (
    <header>
      <Link to="/pic-some/"><h2>Pic Some</h2></Link>
      <Link to="/pic-some/cart">{cartIcon()}</Link>
    </header>
  )
}

export default Header