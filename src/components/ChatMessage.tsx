import { Message } from "@/lib/mockData";
import { TableResponse } from "./TableResponse";
import { AnswerFeedback } from "./AnswerFeedback";
import { User, Bot } from "lucide-react";

interface ChatMessageProps {
  message: Message;
}

export const ChatMessage = ({ message }: ChatMessageProps) => {
  const isUser = message.role === "user";

  return (
    <div
      className={`flex gap-4 p-6 ${
        isUser ? "bg-chat-user" : "bg-chat-assistant"
      }`}
    >
      <div className="flex-shrink-0">
        {isUser ? (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <User className="h-5 w-5 text-primary-foreground" />
          </div>
        ) : (
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <Bot className="h-5 w-5 text-primary-foreground" />
          </div>
        )}
      </div>

      <div className="flex-1 space-y-2">
        <div className="text-sm font-medium">
          {isUser ? "You" : "Assistant"}
        </div>
        <div className="text-sm leading-relaxed">{message.content}</div>
        
        {message.tableData && (
          <TableResponse
            headers={message.tableData.headers}
            rows={message.tableData.rows}
          />
        )}

        {!isUser && <AnswerFeedback messageId={message.id} />}
      </div>
    </div>
  );
};
