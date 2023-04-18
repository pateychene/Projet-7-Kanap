
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



/*import React from "react";
import Card from "../../components/cards/Card"
import logements from '../../datas/logements.json'



function Home(){
	const cardList = logements.map((card) => (
		<Card key={card.id}  title ={card.title} image={card.cover} id={card.id}></Card>
	))

	return (
		<div className="cards-container"> {cardList}</div>
	)
}
export default function Home() {
	return (
		<div>
			<Header />
			<Nav />
			<Banner />
			<CardList />
		</div>
	);
}
export default Home

*/

