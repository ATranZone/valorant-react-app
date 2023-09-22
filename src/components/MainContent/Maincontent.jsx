import AgentCard from "../AgentCard/AgentCard.jsx";
import { useState, useEffect } from "react";

export default function Main() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = () => {
    fetch("https://valorant-api.com/v1/agents")
      .then((response) => response.json())
      .then((response) => setPosts(response.data));
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const agents = posts.map((item) => (
    <AgentCard
      key={item.uuid}
      displayName={item.displayName}
      displayIcon={item.displayIcon}
      isPlayableCharacter={item.isPlayableCharacter}
      description={item.description}
    />
  ));

  return (
    <main className="main-wrapper">
      <h1>Agents</h1>
      <div className="agentCardWrapper">{agents}</div>
    </main>
  );
}
