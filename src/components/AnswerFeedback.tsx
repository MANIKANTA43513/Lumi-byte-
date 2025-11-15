import { ThumbsUp, ThumbsDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface AnswerFeedbackProps {
  messageId: string;
  initialFeedback?: "like" | "dislike";
  onFeedback?: (messageId: string, feedback: "like" | "dislike") => void;
}

export const AnswerFeedback = ({
  messageId,
  initialFeedback,
  onFeedback,
}: AnswerFeedbackProps) => {
  const [feedback, setFeedback] = useState<"like" | "dislike" | null>(
    initialFeedback || null
  );

  const handleFeedback = (type: "like" | "dislike") => {
    const newFeedback = feedback === type ? null : type;
    setFeedback(newFeedback);
    if (newFeedback && onFeedback) {
      onFeedback(messageId, newFeedback);
    }
  };

  return (
    <div className="flex items-center gap-1 mt-2">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleFeedback("like")}
        className={cn(
          "h-8 w-8 p-0",
          feedback === "like" && "text-success hover:text-success"
        )}
      >
        <ThumbsUp className="h-4 w-4" />
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => handleFeedback("dislike")}
        className={cn(
          "h-8 w-8 p-0",
          feedback === "dislike" && "text-destructive hover:text-destructive"
        )}
      >
        <ThumbsDown className="h-4 w-4" />
      </Button>
    </div>
  );
};
