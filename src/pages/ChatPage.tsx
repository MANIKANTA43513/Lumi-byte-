import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { ChatSidebar } from "@/components/ChatSidebar";
import { ChatMessage } from "@/components/ChatMessage";
import { ChatInput } from "@/components/ChatInput";
import { ThemeToggle } from "@/components/ThemeToggle";
import { ScrollArea } from "@/components/ui/scroll-area";
import { mockSessions, generateMockResponse, Message } from "@/lib/mockData";
import { toast } from "sonner";

const ChatPage = () => {
  const { sessionId } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<Message[]>([]);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (sessionId) {
      const session = mockSessions.find((s) => s.id === sessionId);
      if (session) {
        setMessages(session.messages);
      } else {
        // New session - start with empty messages
        setMessages([]);
      }
    } else {
      setMessages([]);
    }
  }, [sessionId, navigate]);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: `msg-${Date.now()}`,
      role: "user",
      content,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    // Simulate API delay
    setTimeout(() => {
      const assistantMessage = generateMockResponse(content);
      setMessages((prev) => [...prev, assistantMessage]);
    }, 500);
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <ChatSidebar currentSessionId={sessionId} />
      
      <div className="flex-1 flex flex-col">
        <header className="border-b p-4 flex items-center justify-between bg-background">
          <h1 className="text-xl font-semibold">
            {sessionId
              ? mockSessions.find((s) => s.id === sessionId)?.title ||
                "Chat Session"
              : "New Chat"}
          </h1>
          <ThemeToggle />
        </header>

        <ScrollArea className="flex-1" ref={scrollRef}>
          {messages.length === 0 ? (
            <div className="flex items-center justify-center h-full">
              <div className="text-center space-y-4 p-8">
                <h2 className="text-2xl font-semibold">
                  Start a new conversation
                </h2>
                <p className="text-muted-foreground max-w-md">
                  Ask me anything and I'll provide structured data and insights
                  to help you make informed decisions.
                </p>
              </div>
            </div>
          ) : (
            <div>
              {messages.map((message) => (
                <ChatMessage key={message.id} message={message} />
              ))}
            </div>
          )}
        </ScrollArea>

        <ChatInput onSendMessage={handleSendMessage} />
      </div>
    </div>
  );
};

export default ChatPage;
