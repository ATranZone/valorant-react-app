export default function AgentCard(props) {
  if (props.isPlayableCharacter) {
    return (
      <div className="agentCard">
        <h2 className="agent-name">{props.displayName}</h2>
        <img className="agent-icon" src={props.displayIcon} />
        <p className="agent-description">{props.description}</p>
      </div>
    );
  }
}
