import React, { useState, useRef, useEffect } from "react";
import { CircularProgressbarWithChildren } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import AnimatedProgressProvider from "./AnimatedProgressProvider";
import { easeQuadInOut } from "d3-ease";
import NumberCounter from "./NumberCounter";
// import Project from "../public/images/project.png"
import Image from "next/image";

const CircleCounter = ({ color1, color2, id,duration,number,title,endNumber,icon }) => {
  const [inView, setInView] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      {
        rootMargin: "0px",
        threshold: 1.0,
      }
    );

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  const progress = inView ? 100 : 0;

  return (
    <div ref={progressRef}>
      <AnimatedProgressProvider
        valueStart={1}
        valueEnd={progress}
        duration={duration}
        easingFunction={easeQuadInOut}
      >
        {(value) => (
          <div>

          <CircularProgressbarWithChildren
            value={value}
            styles={{
              root: {},
              path: {
                stroke: `url(#gradient-${id})`,
                strokeLinecap: "round",
                strokeWidth: 5,
                transition: "stroke-dashoffset 0.5s ease 0s",
 
              },
              trail: {
                stroke: "#f4f4f4",
                strokeWidth: 5,
              },
              text: {
                fill: "black",
                fontSize: "16px",
              },
              background: {
                fill: "#3e98c7",
              },
            }}
          >
            <svg style={{ height: 0 }}>
              <defs>
                <linearGradient
                  id={`gradient-${id}`}
                  x1="0"
                  y1="0"
                  x2="1"
                  y2="1"
                  >
                  <stop offset="0%" stopColor={color1} />
                  <stop offset="100%" stopColor={color2} />
                  {/* <stop offset="75%" stopColor="#dd2476" /> */}
                </linearGradient>
              </defs>
            </svg>
            <div style={{ fontSize: 12, marginTop: -5, color: "black",textAlign:"center",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center" }} className="circle_counter">
              <div style={{width:"50px",height:"50px",marginBottom:"10px"}}>
              <Image src={icon} alt="counter-icon"/>
              </div>
            <NumberCounter startNumber={0} endNumber={endNumber} duration={0.042} symbol="+"/>

              <p>{title}</p>
              {/* <strong>{`${value.toFixed(0)}%`}</strong> mate */}
            </div>
          </CircularProgressbarWithChildren>
        </div>
        )}
      </AnimatedProgressProvider>
    </div>
  );
};

export default CircleCounter;
