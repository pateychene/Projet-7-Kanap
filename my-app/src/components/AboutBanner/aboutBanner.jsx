//la bannière about est une image et un claque assombrissant qui varient selon le responsive
import dataApropos from '../../datas/aboutInfos.json'
import Collapse from '../Collaspe/Collaspe'

function About() {
	return(
	<section>
		{dataApropos.map((item) => (
			<Collapse aboutTitle={item.aboutTitle} aboutText={item.aboutText}></Collapse>
		)) }
	</section>
	)
}

export default About