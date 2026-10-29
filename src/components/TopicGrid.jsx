import TopicCard from "./TopicCard";
import "../styles/TopicGrid.css";

function TopicGrid({ topics, onSelect }) {
  return (
    <section className="topic-grid" aria-label="หัวข้อแนะนำ">
      {topics.map((topic) => (
        <TopicCard
          key={topic.id}
          icon={topic.icon}
          title={topic.title}
          question={topic.question}
          onClick={() => onSelect(topic.question)}
        />
      ))}
    </section>
  );
}

export default TopicGrid;
