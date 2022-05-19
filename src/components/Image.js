import React, {useState, useContext} from 'react'
import {Context} from '../Context'
import PropTypes from 'prop-types'

function Image({className, img}) {

  const [isHovered, setIsHovered] = useState(false)
  const {toggleFavorite, addToCart, alreadyInCart, removeFromCart} = useContext(Context)

  function heartIcon() {
    if(img.isFavorite){
      return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-fill favorite"></i>
    }else if(isHovered) { 
      return <i onClick={() => toggleFavorite(img.id)} className="ri-heart-line favorite"></i>
    }
  }

  function cartIcon() {
    if(alreadyInCart(img)){
      return <i onClick={() => removeFromCart(img.id)} className="ri-add-circle-fill cart"></i>
    } else if(isHovered){
      return <i onClick={() => addToCart(img)} className="ri-add-circle-line cart"></i>
    }
  }

  return (
    <div onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)} className={`${className} image-container`}>
      
      {heartIcon()}
      {cartIcon()}
      <img src={img.url} className="image-grid" />
    </div>
  )
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string,
    url: PropTypes.string,
    isFavorite: PropTypes.bool
  })
}

export default Image