"use client";

import {
  animate,
  useInView,
  useIsomorphicLayoutEffect,
} from "framer-motion";
import { useRef } from "react";


const AnimatedCounter = ({
  from,
  to,
  animationOptions,
  prefix = "",
  posfix = "",
  ...props
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;

    if (!element) return;
    if (!inView) return;

    // Set initial value
    element.textContent = String(from);

    // If reduced motion is enabled in system's preferences
    if (window.matchMedia("(prefers-reduced-motion)").matches) {
      element.textContent = String(to);
      return;
    }

    const controls = animate(from, to, {
      duration: 10,
      ease: "easeInOut",
      ...animationOptions,
      onUpdate(value) {
        element.textContent = value.toFixed(0);
      },
    });

    // Cancel on unmount
    return () => {
      controls.stop();
    };
  }, [ref, inView, from, to]);

  return (
  <div className="flex flex-row">
    {prefix && <span {...props}>{prefix}</span>}
    <span {...props} ref={ref} />
    {posfix && <span {...props}>{posfix}</span>}
    </div>);
};

export default AnimatedCounter;