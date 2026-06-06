import { useEffect, useState } from 'react';

interface StaggeredLinesProps {
  lines: string[];
  speed?: number;
  delayBetween?: number;
  className?: string;
}

function StaggeredLines({
  lines,
  speed = 40,
  delayBetween = 500,
  className = '',
}: StaggeredLinesProps) {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    if (currentLineIndex >= lines.length) return;

    const currentLine = lines[currentLineIndex];

    if (currentText.length < currentLine.length) {
      const timeout = setTimeout(() => {
        setCurrentText(currentLine.slice(0, currentText.length + 1));
      }, speed);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, currentLineIndex]);
        setCurrentText('');
        setCurrentLineIndex((prev) => prev + 1);
      }, delayBetween);
      return () => clearTimeout(timeout);
    }
  }, [currentText, currentLineIndex, lines, speed, delayBetween]);

  return (
    <div className={`${className}`}>
      {visibleLines.map((lineIndex) => (
        <div key={lineIndex} className="mb-1">
          {lines[lineIndex]}
        </div>
      ))}
      {currentLineIndex < lines.length && (
        <div className="mb-1">
          {currentText}
          <span className="animate-pulse">{showCursor ? '█' : ' '}</span>
        </div>
      )}
    </div>
  );
}

export default StaggeredLines;
