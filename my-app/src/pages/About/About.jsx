//la bannière about est une image et un claque assombrissant qui varient selon le responsive
import dataApropos from '../../datas/aboutInfos.json'
import Collapse from '../../components/Collaspe/Collaspe'

function AboutBanner() {
	return(
	<>
		<section className="aboutBackground"></section>
		<section>
			{dataApropos.map((item) => (
				<Collapse key={item.id} aboutTitle={item.aboutTitle} aboutText={item.aboutText}></Collapse>
			)) }
		</section>
	</>
	)
}

export default AboutBanner 