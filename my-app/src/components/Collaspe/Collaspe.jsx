
import React, {useState} from 'react'
import PropTypes from 'prop-types'
import vectorDown from '../../assets/images/VectorDown.png'
import vectorUp from '../../assets/images/VectorUp.png'



function Collapse(props){
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleAccordion = () => {
        setIsCollapsed( !isCollapsed)
    }

    /*
    titre 
      déplier 
      Replier 
        contenu
    */
    return (
        <div className="collapse">
         <div className="headerCollapse" onClick={toggleAccordion}> 
          <h2 className="titleCollapse">{props.aboutTitle}</h2>
          {isCollapsed ? (
            <img className="chevron" src={vectorDown}  alt="Ouvrir"></img>
            ) :<img className="chevron" src={vectorUp}  alt="Fermer"></img>
            }
         </div>
        {!isCollapsed && <div className="contenu">{props.aboutText} </div>}
        </div>
    )
}

 Collapse.protoTypes = {
        aboutTitle :PropTypes.string.isRequired,
        aboutText:PropTypes.string.isRequired,
}

export default Collapse