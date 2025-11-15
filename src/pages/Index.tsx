import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { MessageSquarePlus, Sparkles } from "lucide-react";

const Index = () => {
  const navigate = useNavigate();

  const handleStartNewChat = () => {
    // Generate a new session ID
    const newSessionId = `session-${Date.now()}`;
    navigate(`/chat/${newSessionId}`);
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <header className="border-b p-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-primary" />
          <h1 className="text-xl font-semibold">ChatApp</h1>
        </div>
        <ThemeToggle />
      </header>

      <main className="flex-1 flex items-center justify-center p-8">
        <div className="max-w-2xl text-center space-y-8">
          <div className="space-y-4">
            <h2 className="text-4xl font-bold tracking-tight">
              Welcome to ChatApp
            </h2>
            <p className="text-lg text-muted-foreground">
              Start a conversation and get structured insights powered by AI.
              Ask questions and receive data in easy-to-read tables.
            </p>
          </div>

          <Button
            size="lg"
            onClick={handleStartNewChat}
            className="gap-2 text-lg h-12 px-8"
          >
            <MessageSquarePlus className="h-5 w-5" />
            Start New Chat
          </Button>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Structured Data</h3>
              <p className="text-sm text-muted-foreground">
                Get answers in clear, organized tables
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Session History</h3>
              <p className="text-sm text-muted-foreground">
                Access all your previous conversations
              </p>
            </div>
            <div className="p-6 rounded-lg border bg-card">
              <h3 className="font-semibold mb-2">Dark/Light Theme</h3>
              <p className="text-sm text-muted-foreground">
                Choose your preferred viewing mode
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
