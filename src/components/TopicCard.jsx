function TopicCard({ icon, title, question, onClick }) {
  return (
    <button type="button" className="topic-card" onClick={onClick}>
      <span className="topic-card-icon" aria-hidden="true">
        {icon}
      </span>
      <span className="topic-card-title">{title}</span>
      <span className="topic-card-question">{question}</span>
    </button>
  );
}

export default TopicCard;
