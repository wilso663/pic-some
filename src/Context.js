import React, {useState, useEffect} from 'react'

const Context = React.createContext()

function ContextProvider(props) {

  const [allPhotos, setPhotos] = useState([])
  const [cartItems, setCartItems] = useState([])

  useEffect(() => {
    fetchImages()

  }, [])

  function toggleFavorite(id) {
    setPhotos(prevPhotos => prevPhotos.map(photo => {
      if(photo.id === id) {
        return {...photo, isFavorite: !photo.isFavorite}
      }
      return photo
      })
    )
  }

  function addToCart(imgItem) {
    setCartItems(prevItems => [...prevItems, imgItem])
  }

  function removeFromCart(id) {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  function alreadyInCart(imgItem) {
    return cartItems.find(item => item.id === imgItem.id) ? true : false
  }

  function hasItems() {
    return cartItems.length > 0
  }
  
  function emptyCart() {
    setCartItems([])
  }

  function fetchImages() {
    fetch('https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json')
      .then(res => res.json())
      .then(data => setPhotos(data))
      .catch(err => console.log(err))
  }



  return (
    <Context.Provider value={{allPhotos, toggleFavorite, addToCart, removeFromCart, emptyCart, alreadyInCart, hasItems, cartItems}}>
      {props.children}
    </Context.Provider>
  )
}

export {ContextProvider, Context}