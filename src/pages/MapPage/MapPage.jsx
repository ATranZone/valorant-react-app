import MapCard from "../../components/MapCard/MapCard.jsx";
import NavBar from "../../components/Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import "./MapPage.css";

export default function MapPage() {
	const [maps, setMaps] = useState([]);

	const fetchMaps = () => {
		fetch("https://valorant-api.com/v1/maps", { method: "GET" })
			.then((response) => response.json())
			.then((response) => setMaps(response.data));
	};

	useEffect(() => {
		fetchMaps();
	}, []);

	const mapList = maps.map((item) => (
		<MapCard
			key={item.uuid}
			displayName={item.displayName}
			splash={item.splash}
			map={item.displayIcon}
		/>
	));

	return (
		<div>
			<>
				<NavBar />
				<main className="maps-body-container">
					<h1>Maps</h1>
					<p>This list includes TDM and competitive maps.</p>
					{mapList}
				</main>
			</>
		</div>
	);
}
