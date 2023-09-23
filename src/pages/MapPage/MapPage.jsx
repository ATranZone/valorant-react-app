import MapCard from "../../components/MapCard/MapCard.jsx";
import NavBar from "../../components/Navbar/Navbar.jsx";
import { useState, useEffect } from "react";
import "./MapPage.css";

export default function MapPage() {
  const [maps, setMaps] = useState([]);

  const fetchMaps = () => {
    fetch("https://valorant-api.com/v1/maps")
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
      description={item.narrativeDescription}
      splash={item.splash}
      map={item.displayIcon}
    />
  ));

  return (
    <div>
      <>
        <NavBar />
        <main className="maps-body-container">
          <h1>Competitive Maps</h1>
          <p>
            These maps are currently or have once been in the competitive map
            pool.
          </p>
          {mapList};
        </main>
      </>
    </div>
  );
}
