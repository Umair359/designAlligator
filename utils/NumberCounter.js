import { useState, useRef, useEffect } from "react";

function NumberCounter({ startNumber, endNumber, duration, symbol,fixed }) {
  const [currentNumber, setCurrentNumber] = useState(0);
  const animationRef = useRef();
  const elementRef = useRef();

  useEffect(() => {
    const element = elementRef.current;
    const increment = (endNumber - startNumber) / (duration * 1000);
    let start = null;

    const animate = (time) => {
      if (!start) {
        start = time;
      }
      const progress = (time - start) / (duration * 1000);
      const newNumber = startNumber + increment * progress;

      if (newNumber < endNumber) {
        setCurrentNumber(newNumber);
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setCurrentNumber(endNumber);
      }
    };

    const handleScroll = () => {
      const top = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      if (top < windowHeight * 0.8) {
        animationRef.current = requestAnimationFrame(animate);
        window.removeEventListener("scroll", handleScroll);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [startNumber, endNumber, duration]);

  return (
    <div ref={elementRef}>
      <h2 className="achievement-count">
        {currentNumber.toFixed(fixed)}
        {symbol}
      </h2>
    </div>
  );
}
export default NumberCounter;
