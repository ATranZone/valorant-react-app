import AgentPage from "./pages/AgentPage/AgentPage.jsx";
import MapPage from "./pages/MapPage/MapPage.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/" element={<AgentPage />}></Route>
          <Route path="/maps" element={<MapPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
