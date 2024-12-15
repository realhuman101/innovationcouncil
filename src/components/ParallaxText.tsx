"use client"

import { useRef, ReactNode, useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame
} from "framer-motion";

interface ParallaxProps {
  children: ReactNode;
  baseVelocity: number;
}

export default function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const [spanCount, setSpanCount] = useState(4);
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  useEffect(() => {
    const calculateSpans = () => {
      if (scrollerRef.current && containerRef.current) {
        const viewportWidth = containerRef.current.offsetWidth;
        const contentWidth = scrollerRef.current.children[0].clientWidth;
        const requiredSpans = Math.ceil((viewportWidth * 4) / contentWidth) + 3;
        setSpanCount(requiredSpans);
      }
    };

    calculateSpans();
    window.addEventListener('resize', calculateSpans);
    return () => window.removeEventListener('resize', calculateSpans);
  }, [children]);

  const wrappedX = useRef(0);
  
  useAnimationFrame((time, delta) => {
    if (!delta) return;

    let currentVelocity = baseVelocity;
    if (velocityFactor.get() !== 0) {
      currentVelocity *= velocityFactor.get();
    }

    wrappedX.current -= (currentVelocity * delta) / 1000;

    if (wrappedX.current <= -100) {
      wrappedX.current = 0;
    }
    
    baseX.set(wrappedX.current);
  });

  return (
    <div className="parallax" ref={containerRef}>
      <style>
        {`.parallax {
          overflow: hidden;
          margin: 0;
          white-space: nowrap;
          display: flex;
          flex-wrap: nowrap;
          width: 100vw;
          background: transparent;
        }

        .parallax .scroller {
          display: flex;
          white-space: nowrap;
          flex-wrap: nowrap;
          align-items: center;
          will-change: transform;
          transform: translateZ(0);
          backface-visibility: hidden;
        }

        .parallax .content-wrapper {
          display: flex;
          align-items: center;
          flex-shrink: 0;
          transform: translateZ(0);
        }

        .parallax img {
          width: auto;
          object-fit: cover;
        }

        .parallax .text {
          display: inline-flex;
          align-items: center;
          transform: translateZ(0);
        }`}
      </style>

      <motion.div 
        className="scroller" 
        style={{ x: baseX }}
        ref={scrollerRef}
      >
        {Array.from({ length: spanCount }, (_, i) => (
          <div key={i} className="content-wrapper">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}