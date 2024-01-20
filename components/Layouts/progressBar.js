import React, { useState, useEffect, useRef } from "react";
import { ProgressBar, Tooltip, Overlay } from "react-bootstrap";

const AnimatedProgressBar = ({ N, speed, initialValue, displayValue, bg }) => {
  const [value, setValue] = useState(initialValue);
  const progressRef = useRef(null);
  const start = useRef(null);
  const requestId = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const progressElement = progressRef.current;
      if (
        !requestId.current &&
        progressElement &&
        isElementInViewport(progressElement, 0.5) // check if at least 50% of element is in view
      ) {
        requestId.current = requestAnimationFrame(animate);
      }
    };

    start.current = performance.now(); // set initial value of start.current
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      cancelAnimationFrame(requestId.current);
    };
  }, []);

  useEffect(() => {
    start.current = performance.now(); // reset start.current when initialValue changes
  }, [initialValue]);

  const animate = (timestamp) => {
    const elapsed = timestamp - start.current;
    const progress = Math.min(1, elapsed / (speed * 2));

    const newValue = Math.round(progress * N);

    console.log("progress:", progress);
    console.log("elapsed:", elapsed);
    console.log("N:", N);
    console.log("newValue:", newValue);

    setValue(newValue);

    if (newValue >= displayValue * N) {
      setValue(displayValue * N);
      requestId.current = null;
      return;
    }

    if (progress < 1) {
      requestId.current = requestAnimationFrame(animate);
    } else {
      requestId.current = null;
    }
  };

  const isElementInViewport = (element) => {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const tooltip = (
    <Overlay target={progressRef.current} show={value > 0} placement="right">
      {(props) => (
        <Tooltip id="tooltip" {...props} className={`${bg}`}>
          {`${Math.round((value / N) * 100)}%`}
        </Tooltip>
      )}
    </Overlay>
  );

  return (
    <div style={{ width: "80%" }} className={`${bg}`}>
      <ProgressBar ref={progressRef} now={value} />
      {tooltip}
    </div>
  );
};

export default AnimatedProgressBar;
