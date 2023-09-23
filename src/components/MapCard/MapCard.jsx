import "./MapCard.css";

export default function MapCard(props) {
  if (props.description != null) {
    return (
      <div className="map-container">
        <h3 className="map-card-header">{props.displayName}</h3>
        <img className="map-splash" src={props.splash} />
        <img className="minimap" src={props.map} />
        <p>{props.description}</p>
      </div>
    );
  }
}
