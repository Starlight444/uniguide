import { formatDateTime } from "../utils/formatDateTime";
import "../styles/MessageList.css";

function MessageList({ messages, isLoading }) {
  return (
    <section className="message-list" aria-live="polite">
      {messages.map((message, index) => (
        <div key={index} className={`message message--${message.role}`}>
          <span className="message-label">
            {message.role === "user" ? "คุณ" : "UniGuide"}
          </span>
          <p className="message-content">{message.content}</p>
          <time
            className="message-time"
            dateTime={message.createdAt.toISOString()}
          >
            {formatDateTime(message.createdAt)}
          </time>
        </div>
      ))}

      {isLoading && (
        <div className="message message--assistant">
          <p className="message-content">กำลังค้นหาคำตอบ...</p>
        </div>
      )}
    </section>
  );
}

export default MessageList;
