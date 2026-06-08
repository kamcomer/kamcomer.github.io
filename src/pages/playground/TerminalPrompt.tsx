import { useEffect, useState } from "react";
import Typewriter from "./Typewriter";

interface TerminalPromptProps {
  lines: string[];
  speed?: number;
  delayBetween?: number;
  className?: string;
}

function TerminalPrompt({
  lines,
  speed = 50,
  delayBetween = 300,
  className = "",
}: TerminalPromptProps) {
  const [currentLine, setCurrentLine] = useState(0);
  const [showCursor, setShowCursor] = useState(true);
  const [allComplete, setAllComplete] = useState(false);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  const handleLineComplete = () => {
    if (currentLine < lines.length - 1) {
      setTimeout(() => {
        setCurrentLine((prev) => prev + 1);
      }, delayBetween);
    } else {
      setAllComplete(true);
    }
  };

  return (
    <div className={`font-mono ${className}`}>
      {lines.map((line, index) => (
        <div key={index} className="mb-1">
          {index <= currentLine ? (
            <>
              <span className="text-primary dark:text-primary-dark">› </span>
              {index === currentLine && !allComplete ? (
                <Typewriter
                  text={line}
                  speed={speed}
                  onComplete={handleLineComplete}
                />
              ) : (
                <span>
                  {line}
                  {index === currentLine && (
                    <span className="animate-pulse">
                      {showCursor ? "█" : " "}
                    </span>
                  )}
                </span>
              )}
            </>
          ) : null}
        </div>
      ))}
    </div>
  );
}

export default TerminalPrompt;
