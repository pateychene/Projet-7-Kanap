import {useParams}  from 'react-router-dom'
import Carrousel from "../../components/Carrousel/Carrousel"
import logements from '../../datas/logements'
import Error from '../Error/Error'
import Collaspe from '../../components/Collaspe/Collaspe'

export default function FicheLogement() {

  const {id} = useParams() 
  const currentLogement = logements.find((logement) => logement.id === id)

  console.log(currentLogement)

  if(! currentLogement ){
    return <Error />
  }

  //Récupérer les équipements
  const equipements = currentLogement.equipments.map( (equipement) => (
      <div key={equipement}>
      {equipement}
      <br/>
    </div>
  ))

  
  return (
    <div>
      <Carrousel images={currentLogement.pictures} />
      <h1>voici la fiche Logement</h1> 
      <div className='tagLogement'>
        
      </div>
      
      <div className='containerCollaspe'>
        <div className='containerDesciption'>
          <Collaspe aboutTitle="Description" aboutText={currentLogement.description}></Collaspe>
        </div>
        <div className='containerEquipements'>
                <Collaspe aboutTitle="Equipements" aboutText={equipements}></Collaspe>
        </div>
      

      </div>

      </div>
  )
}