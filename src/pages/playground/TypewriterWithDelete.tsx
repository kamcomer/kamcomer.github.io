import { useEffect, useState } from 'react';

interface TypewriterWithDeleteProps {
  variations: string[];
  speed?: number;
  deleteSpeed?: number;
  pauseDuration?: number;
  className?: string;
}

function TypewriterWithDelete({
  variations,
  speed = 50,
  deleteSpeed = 30,
  pauseDuration = 2000,
  className = '',
}: TypewriterWithDeleteProps) {
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
    const currentWord = variations[currentIndex];

    if (!isDeleting) {
      if (currentText.length < currentWord.length) {
        const timeout = setTimeout(() => {
          setCurrentText(currentWord.slice(0, currentText.length + 1));
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
          setCurrentIndex((prev) => (prev + 1) % variations.length);
        }, 0);
        return () => clearTimeout(timeout);
      }
    }
  }, [currentText, isDeleting, variations, speed, deleteSpeed, pauseDuration, currentIndex]);

  return (
    <span className={className}>
      {currentText}
      <span className="animate-pulse">{showCursor ? '█' : ' '}</span>
    </span>
  );
}

export default TypewriterWithDelete;
