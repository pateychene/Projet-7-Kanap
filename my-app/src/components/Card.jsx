import React from 'react'
import {Link} from 'react-router-dom'

function Card({title, image, id}){

  return (
     <Link to={`/fichelogement/${id}`}> 
     <h3>{title}</h3>
     </Link>
  )
}

export default Card