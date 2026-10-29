import { useState } from "react";
import { sendQuestion } from "../services/chatService";

// Stamps each message with the time it was added to the conversation.
function createMessage(role, content) {
  return { role, content, createdAt: new Date() };
}

// Holds the conversation state and talks to the chat service,
// so UI components never call the API directly.
export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function ask(question) {
    const text = question.trim();
    if (!text || isLoading) return;

    setMessages((prev) => [...prev, createMessage("user", text)]);
    setIsLoading(true);

    try {
      const reply = await sendQuestion(text);
      setMessages((prev) => [...prev, createMessage(reply.role, reply.content)]);
    } catch {
      setMessages((prev) => [
        ...prev,
        createMessage("assistant", "ขออภัย เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง"),
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return { messages, isLoading, ask };
}
