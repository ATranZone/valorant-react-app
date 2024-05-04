import "./MapCard.css";

export default function MapCard(props) {
	if (props.map != null) {
		return (
			<div className="map-container">
				<h3 className="map-card-header">{props.displayName}</h3>
				<div className="map-images">
					<img className="map-splash" src={props.splash} />
					<img className="minimap" src={props.map} />
				</div>
				<p>{props.description}</p>
			</div>
		);
	}
}
