import {useParams}  from 'react-router-dom'
import Carrousel from "../../components/Carrousel/Carrousel"
import logements from '../../datas/logements'
import Error from '../Error/Error'
import Collaspe from '../../components/Collaspe/Collaspe'
import Tag from '../../components/Tag/Tag'
import Host from '../../components/Host/Host'
import Rate from '../../components/Rate/Rate'

export default function FicheLogement() {
  
  const {id} = useParams() 
  //Recuperer les infos du logement dans notre json grace a son id 
  const currentLogement = logements.find((logement) => logement.id === id) 
  //console log pour tester si notre data a bien ete recupere 
  console.log(currentLogement)
  //Récupérer les équipements
  const equipements = currentLogement.equipments.map( (equipement) => (
    <div key={equipement}>
    {equipement}
    <br/>
    </div>
    )) 
  //Recuperer les tags  
    const tags = currentLogement && currentLogement.tags;
  
  //si url du logement pas valide , renvoi sur page erreur, autrement on retourne le code plus bas.
  if(! currentLogement ){
    return <Error />
  }
  
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
        <div className="rate-host-container">
						<div className="host-container redFont">
							<Host
								hostName={currentLogement.host.name}
								hostPic={currentLogement.host.picture}
							/>
						</div>  <div className="rate-container">
							<Rate score={currentLogement.rating} />
				</div>
      
						</div>
        </section>
        
        <div className='containerCollaspe'>
        <div className='containerDescription'>
        <Collaspe aboutTitle="Description" aboutText={currentLogement.description}></Collaspe>
        </div>
        <div className='containerEquipements'>
        <Collaspe aboutTitle="Equipements" aboutText={equipements}></Collaspe>
        </div>
        
        
        </div>
        
        </div>
        )
      }