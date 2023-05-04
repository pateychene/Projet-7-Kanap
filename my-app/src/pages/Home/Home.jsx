
import Banner from "../../components/banner/Banner";
import Card from "../../components/cards/Card";
import { Link } from "react-router-dom";
import logements from '../../datas/logements.json'

export default function Home() {
	
	return (
		<>
			<Banner />
			<div className="cards-container">
				{logements.map((appart, id) => (
					<div className="card_logement" key={id}>
						<Link className="link_card_logement" to={`/logement/${appart.id}`}>
							<Card cover={appart.cover} title={appart.title} />
						</Link>
					</div>
				))}
			</div>
		</>
	);
}



