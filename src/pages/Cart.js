import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import CartItem from '../components/CartItem'

function Cart() {
  const {cartItems, emptyCart, hasItems} = useContext(Context)
  const [buttonText, setButtonText] = useState("Place Order")
  const ITEM_COST = 5.99
  const placeOrderText = "Place Order"
  const orderingText = `Ordering...`

  function totalCost() {
    return cartItems.length * ITEM_COST
  }
  
  const cartItemElements = cartItems.map(item => (
    <CartItem key={item.id} item={item} />
  ))

  function placeOrder() {
    setButtonText(orderingText)
    setTimeout(() => {
      emptyCart()
      console.log('Order placed')
      setButtonText(placeOrderText)
    }, 3000)
  }

  return (
    <main className="cart-page">
      <h1>Check out</h1>
      {cartItemElements}
      <p className="total-cost">Total: {totalCost().toLocaleString("en-US", {style: "currency", currency: "USD"})}</p>
      {hasItems() ?
      <div className="order-button">
        <button className="order-btn" onClick={placeOrder}>{buttonText}</button>
      </div> : <p>You have no items in your cart.</p>
      }
    </main>
  )
}
export default Cart
