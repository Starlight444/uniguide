import Hero from "./components/Hero";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import { useChat } from "./hooks/useChat";
import "./styles/App.css";

function App() {
  const { messages, isLoading, ask } = useChat();
  const hasMessages = messages.length > 0;

  return (
    <main className="app">
      <Hero />

      {hasMessages && (
        <MessageList messages={messages} isLoading={isLoading} />
      )}

      <ChatInput onSend={ask} disabled={isLoading} />

      <p className="disclaimer">
        คำตอบอาจไม่ถูกต้องทั้งหมด โปรดตรวจสอบกับประกาศทางการของมหาวิทยาลัย
      </p>
    </main>
  );
}

export default App;
