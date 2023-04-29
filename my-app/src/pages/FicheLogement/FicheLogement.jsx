import {useParams}  from 'react-router-dom'
import Carrousel from "../../components/Carrousel/Carrousel"
import logements from '../../datas/logements'
import Error from '../Error/Error'
import Collaspe from '../../components/Collaspe/Collaspe'
import Tag from '../../components/Tag/Tag'

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

  const tags = currentLogement && currentLogement.tags;

  
  return (
    <div>
      <Carrousel images={currentLogement.pictures} />
      <section className="hostInfo-container">
					<div className="title-tags-container">
						<div className="title-container redFont">
							<h1>{currentLogement.title}</h1>
							<h3>{currentLogement.location}</h3>
						</div>
						<div className="tags-container">
							{tags.map((tag) => (
								<Tag key={tag} tag={tag} />
							))}
						</div>
					</div>
	
				</section>
      
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