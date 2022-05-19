import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'

function CartItem({item}) {
  const [isHovered, setIsHovered] = useState(false)
  const {removeFromCart} = useContext(Context)


  function binIcon() {
    if(isHovered) {
      return <i onClick={() => removeFromCart(item.id)}className="ri-delete-bin-fill" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></i>
    }
    return <i onClick={() => removeFromCart(item.id)}className="ri-delete-bin-line" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}></i>
  }

  return (
    <div className='cart-item' >
      {binIcon()}
      <img src={item.url} width="130px" />
      <p>$5.99</p>
    </div>
  )
}

CartItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string.isRequired
  })
}

export default CartItem