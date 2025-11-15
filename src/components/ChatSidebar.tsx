import { MessageSquarePlus, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { NavLink } from "@/components/NavLink";
import { mockSessions } from "@/lib/mockData";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils";

interface ChatSidebarProps {
  currentSessionId?: string;
}

export const ChatSidebar = ({ currentSessionId }: ChatSidebarProps) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const navigate = useNavigate();

  const handleNewChat = () => {
    navigate("/");
  };

  return (
    <>
      {/* Mobile toggle button */}
      <Button
        variant="ghost"
        size="icon"
        className="fixed top-4 left-4 z-50 md:hidden"
        onClick={() => setIsCollapsed(!isCollapsed)}
      >
        {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
      </Button>

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed md:relative inset-y-0 left-0 z-40 flex flex-col border-r bg-sidebar transition-all duration-300",
          isCollapsed ? "-translate-x-full md:translate-x-0 md:w-0" : "translate-x-0 w-64"
        )}
      >
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="font-semibold text-lg">Chat History</h2>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsCollapsed(true)}
          >
            <X className="h-5 w-5" />
          </Button>
        </div>

        <div className="p-3 border-b">
          <Button
            onClick={handleNewChat}
            className="w-full justify-start gap-2"
            variant="outline"
          >
            <MessageSquarePlus className="h-4 w-4" />
            New Chat
          </Button>
        </div>

        <ScrollArea className="flex-1">
          <div className="p-3 space-y-2">
            {mockSessions.map((session) => (
              <NavLink
                key={session.id}
                to={`/chat/${session.id}`}
                className={cn(
                  "block px-3 py-2 rounded-lg text-sm hover:bg-sidebar-accent transition-colors",
                  currentSessionId === session.id && "bg-sidebar-accent font-medium"
                )}
              >
                <div className="truncate">{session.title}</div>
                <div className="text-xs text-muted-foreground mt-1">
                  {session.createdAt.toLocaleDateString()}
                </div>
              </NavLink>
            ))}
          </div>
        </ScrollArea>

        <div className="p-4 border-t">
          <div className="text-xs text-muted-foreground">
            <div className="font-medium">User Info</div>
            <div className="mt-1">demo@example.com</div>
          </div>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {!isCollapsed && (
        <div
          className="fixed inset-0 bg-black/50 z-30 md:hidden"
          onClick={() => setIsCollapsed(true)}
        />
      )}
    </>
  );
};
