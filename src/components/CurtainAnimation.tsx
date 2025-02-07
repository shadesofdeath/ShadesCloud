import { useState, useEffect } from 'react';

export function CurtainAnimation() {
  const [isFinished, setIsFinished] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsFinished(true);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (isFinished) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div className="w-1/2 bg-black animate-curtain-left"></div>
      <div className="w-1/2 bg-black animate-curtain-right"></div>
    </div>
  );
}