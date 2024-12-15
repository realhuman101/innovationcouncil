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
import { wrap } from "@motionone/utils";

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
        const requiredSpans = Math.ceil((viewportWidth * 2.5) / contentWidth) + 1;
        setSpanCount(requiredSpans);
      }
    };

    calculateSpans();
    window.addEventListener('resize', calculateSpans);
    return () => window.removeEventListener('resize', calculateSpans);
  }, [children]);

  const directionFactor = useRef<number>(baseVelocity > 0 ? 1 : -1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      moveBy *= -1;
    }

    moveBy += moveBy * velocityFactor.get();
    baseX.set(baseX.get() + moveBy);
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, -50, v)}%`);

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
        }

        .parallax .content-wrapper {
          display: flex;
          align-items: center;
          padding: 0 15px;
        }

        .parallax img {
          width: auto;
          object-fit: cover;
          margin: 0 10px;
        }

        .parallax .text {
          display: inline-flex;
          align-items: center;
        }`}
      </style>

      <motion.div className="scroller" style={{ x }} ref={scrollerRef}>
        {Array.from({ length: spanCount }, (_, i) => (
          <div key={i} className="content-wrapper">
            {children}
          </div>
        ))}
      </motion.div>
    </div>
  );
}