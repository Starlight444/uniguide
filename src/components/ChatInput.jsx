import { useState } from "react";
import "../styles/ChatInput.css";

function ChatInput({ onSend, disabled }) {
  const [question, setQuestion] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    if (!question.trim()) return;

    onSend(question);
    setQuestion("");
  }

  return (
    <form className="chat-input" onSubmit={handleSubmit}>
      <input
        className="chat-input-field"
        value={question}
        onChange={(event) => setQuestion(event.target.value)}
        placeholder="พิมพ์คำถามของคุณ เช่น ค่าเทอมคณะนิติศาสตร์เท่าไหร่?"
        aria-label="คำถามของคุณ"
      />
      <button
        type="submit"
        className="chat-input-button"
        disabled={disabled || !question.trim()}
      >
        ส่ง
      </button>
    </form>
  );
}

export default ChatInput;
