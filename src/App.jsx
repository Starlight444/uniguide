import Hero from "./components/Hero";
import TopicGrid from "./components/TopicGrid";
import MessageList from "./components/MessageList";
import ChatInput from "./components/ChatInput";
import { topics } from "./data/topics";
import { useChat } from "./hooks/useChat";
import "./styles/App.css";

function App() {
  const { messages, isLoading, ask } = useChat();
  const hasMessages = messages.length > 0;

  return (
    <main className="app">
      <Hero />

      {hasMessages ? (
        <MessageList messages={messages} isLoading={isLoading} />
      ) : (
        <TopicGrid topics={topics} onSelect={ask} />
      )}

      <ChatInput onSend={ask} disabled={isLoading} />

      <p className="disclaimer">
        คำตอบอาจไม่ถูกต้องทั้งหมด โปรดตรวจสอบกับประกาศทางการของมหาวิทยาลัย
      </p>
    </main>
  );
}

export default App;
