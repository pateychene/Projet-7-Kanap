import React, {useState} from 'react'
import PropTypes from 'prop-types'
import vectorRight from '../../assets/images/VectorRight.svg'
import vectorLeft from '../../assets/images/VectorLeft.png'
const Carrousel = ({images}) => {
    const [currentImage, setCurrentImage] = useState(0);
    //Définir les fonctions suivant et précédent
    const nextImage = () => {
        let  newIndex  =  currentImage +1 >= images.length ? 0 :  currentImage +1
        setCurrentImage(newIndex)
    }
     const previousImage = () => {
        let  newIndex  =  currentImage -1 <= 0 ? images.length-1 :  currentImage -1
        setCurrentImage(newIndex)
    }


    return(
        <section className="containerCarrousel">
        <div className="containerImageCarrousel">
        <img className="imageCarrousel"
            src={images[currentImage]}
            alt={`${currentImage +1 }`}>
        </img>
        </div>
        <div className="imageCounter">
            {currentImage +1}/{images.length}
        </div>

        
         <img className="leftArrow"
            src={vectorLeft} 
            alt="Précédent"
            onClick={previousImage}>
         </img>

         <img className="rightArrow"
            src={vectorRight} 
            alt="Suivant"
            onClick={nextImage}>
         </img>
        </section>
    )
}

Carrousel.propTypes= {
    images : PropTypes.array.isRequired
}

export default Carrousel