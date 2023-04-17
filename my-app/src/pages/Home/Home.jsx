import React from "react";
import Card from "../../components/Card"
import logements from '../../datas/logements.json'
import './Home.css'


function Home(){
	const cardList = logements.map((card) => (
		<Card key={card.id}  title ={card.title} image={card.cover} id={card.id}></Card>
	))

	return (
		<section>
		<div> {cardList}</div>
		</section>
	)
}


/*
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

*/

export default Home
