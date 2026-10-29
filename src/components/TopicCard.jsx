function TopicCard({ icon: Icon, title, question, onClick }) {
  return (
    <button type="button" className="topic-card" onClick={onClick}>
      <span className="topic-card-icon" aria-hidden="true">
        <Icon size={22} strokeWidth={2} />
      </span>
      <span className="topic-card-text">
        <span className="topic-card-title">{title}</span>
        <span className="topic-card-question">{question}</span>
      </span>
    </button>
  );
}

export default TopicCard;
