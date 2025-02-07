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
      <div className="w-1/2 animate-curtain-left" style={{ backgroundColor: '#1a1a1a' }}></div>
      <div className="w-1/2 animate-curtain-right" style={{ backgroundColor: '#1a1a1a' }}></div>
    </div>
  );
}