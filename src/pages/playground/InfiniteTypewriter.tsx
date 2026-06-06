import { useEffect, useState } from 'react';

interface InfiniteTypewriterProps {
  texts: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

function InfiniteTypewriter({
  texts,
  speed = 50,
  deleteSpeed = 30,
  pauseDuration = 2000,
  className = '',
}: InfiniteTypewriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev);
    }, 500);
    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    const currentText_ = texts[currentIndex];

    if (!isDeleting) {
      if (currentText.length < currentText_.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText_.slice(0, currentText.length + 1));
        }, speed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      if (currentText.length > 0) {
        const timeout = setTimeout(() => {
          setCurrentText(currentText.slice(0, -1));
        }, deleteSpeed);
        return () => clearTimeout(timeout);
      } else {
        const timeout = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % texts.length);
        }, 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isDeleting, texts, speed, deleteSpeed, pauseDuration, currentIndex]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">{showCursor ? '█' : ' '}</span>
    </span>
  );
}

export default InfiniteTypewriter;
