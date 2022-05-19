import React, {useContext} from 'react'
import {Context} from '../Context'
import {getClass} from '../utils'
import Image from '../components/Image'

function Photos() {
  const {allPhotos} = useContext(Context)

  const imageGrid = allPhotos.map((photo, index) => (
    <Image key={photo.id} img={photo} className={getClass(index)}/>
  ))

  return (
    <main className="photos">
      {imageGrid}
    </main>
  )
}

export default Photos