//Import des dependences necessaires pour creer notre composant fonctionel 
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import vectorRight from '../../assets/images/VectorRight.svg'
import vectorLeft from '../../assets/images/VectorLeft.png'

//Carrousel est un composant fonctionel qui prends en props un tableau de "images"
const Carrousel = ({images}) => {
    //on utilise le hook useState pour definir l'etat de currentImage a zero , et on utilise setCurrentImage pour l'update
    const [currentImage, setCurrentImage] = useState(0);
    //Définir la fonction suivant et precedent
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
        
        {images.length > 1  && (
          <>
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
        </>
        )}
        
        </section>
    )
}
//L'objet propTypes defini le type de 'images' comme un tableau est on specifie que c'est requis , on attends de images que ce soit un tableau.
Carrousel.propTypes= {
    images : PropTypes.array.isRequired
}

export default Carrousel