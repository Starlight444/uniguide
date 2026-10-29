import { useState } from "react";
import { sendQuestion } from "../services/chatService";

// Holds the conversation state and talks to the chat service,
// so UI components never call the API directly.
export function useChat() {
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  async function ask(question) {
    const text = question.trim();
    if (!text || isLoading) return;

    setMessages((prev) => [...prev, { role: "user", content: text }]);
    setIsLoading(true);

    try {
      const reply = await sendQuestion(text);
      setMessages((prev) => [...prev, reply]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "ขออภัย เกิดข้อผิดพลาด กรุณาลองใหม่อีกครั้ง" },
      ]);
    } finally {
      setIsLoading(false);
    }
  }

  return { messages, isLoading, ask };
}
