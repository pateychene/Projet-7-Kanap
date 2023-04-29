import FullStar from '../../assets/images/FullStar.svg'
import EmptyStar from '../../assets/images/EmptyStar.svg'

export default function Rate({ score }) {
	const stars = [1, 2, 3, 4, 5];
	return (
		<div className="rate-comp">
			{stars.map((starCount) =>
				score >= starCount ? (
					<img
						key={starCount.toString()}
						className="star"
						src={FullStar}
						alt="rating star"
					/>
				) : ( //affichage conditionnel des étoiles de score, pleine ou vide selon le score passé en props
					<img
						key={starCount.toString()}
						className="star"
						src={EmptyStar}
						alt="rating star"
					/>
				)
			)}
		</div>
	);
}