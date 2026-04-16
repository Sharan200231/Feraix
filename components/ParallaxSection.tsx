"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useReducedMotion,
  MotionValue,
} from "framer-motion";

// ──────────────────────────────────────────────────────────────────────────────
// Shared spring config for buttery-smooth scroll transforms.
// High damping + moderate stiffness = no jitter, no lag.
// ──────────────────────────────────────────────────────────────────────────────
const SPRING_CONFIG = { stiffness: 120, damping: 30, restDelta: 0.001 };

/**
 * useParallax – core hook that powers every parallax primitive.
 *
 * Returns a spring-smoothed MotionValue<number> representing a pixel offset
 * driven by scroll progress of the target ref.
 *
 * @param offset   Max displacement in px (positive = moves down when scrolling down)
 * @param direction  "up" inverts the range so the element drifts up on scroll
 */
export function useParallax(
  offset: number = 50,
  direction: "up" | "down" = "up"
) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // Track from the moment the element's top hits the viewport bottom
    // to the moment its bottom passes the viewport top.
    offset: ["start end", "end start"],
  });

  const range: [number, number] =
    direction === "up" ? [offset, -offset] : [-offset, offset];

  const raw = useTransform(scrollYProgress, [0, 1], range);
  const y = useSpring(raw, SPRING_CONFIG);

  return { ref, y: prefersReducedMotion ? 0 : y };
}

// ──────────────────────────────────────────────────────────────────────────────
// 1) ParallaxLayer
//    A zero-markup, scroll-linked layer. Perfect for backgrounds, images, and
//    decorative blurs. It renders an absolutely-positioned motion.div whose
//    translateY is driven by scroll progress.
//
//    speed < 0.5 → background feel (moves slowly)
//    speed > 0.5 → foreground feel (moves faster)
// ──────────────────────────────────────────────────────────────────────────────

interface ParallaxLayerProps {
  children: React.ReactNode;
  /** Parallax displacement in px. Default 40. */
  offset?: number;
  /** Direction the element drifts as you scroll down. Default "up". */
  direction?: "up" | "down";
  /** Extra classNames for the container (the scroll-tracking ref). */
  className?: string;
  /** Extra classNames for the inner motion div. */
  innerClassName?: string;
}

export function ParallaxLayer({
  children,
  offset = 40,
  direction = "up",
  className = "",
  innerClassName = "",
}: ParallaxLayerProps) {
  const { ref, y } = useParallax(offset, direction);

  return (
    <div ref={ref} className={className}>
      <motion.div
        style={{ y, willChange: "transform" }}
        className={innerClassName}
      >
        {children}
      </motion.div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// 2) ParallaxImage
//    Wraps a Next.js <Image fill /> so the image "floats" inside its container
//    as the user scrolls. The container clips the overflow so the extra travel
//    is invisible—you just see a smooth depth shift.
// ──────────────────────────────────────────────────────────────────────────────

interface ParallaxImageProps {
  children: React.ReactNode;
  /** How many pixels the image can travel. Default 60. */
  offset?: number;
  direction?: "up" | "down";
  className?: string;
}

export function ParallaxImage({
  children,
  offset = 60,
  direction = "up",
  className = "",
}: ParallaxImageProps) {
  const { ref, y } = useParallax(offset, direction);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        style={{
          y,
          scale: 1.1,
          willChange: "transform",
        }}
        className="w-full h-full relative"
      >
        {children}
      </motion.div>
    </div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// 3) ScrollFade
//    Fades + translates an element as it enters the viewport.
//    Uses the scroll position itself (not whileInView) so the animation
//    is continuously linked to scroll—feels tangible, not triggered.
// ──────────────────────────────────────────────────────────────────────────────

interface ScrollFadeProps {
  children: React.ReactNode;
  className?: string;
  /** Y offset in px to translate from. Default 40. */
  offset?: number;
}

export function ScrollFade({
  children,
  className = "",
  offset = 40,
}: ScrollFadeProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    // Begin animating when the element is 20% into the viewport from the bottom,
    // finish when it reaches 60% up.
    offset: ["start 0.95", "start 0.4"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const y = useTransform(scrollYProgress, [0, 1], [offset, 0]);

  const smoothOpacity = useSpring(opacity, SPRING_CONFIG);
  const smoothY = useSpring(y, SPRING_CONFIG);

  return (
    <motion.div
      ref={ref}
      style={{
        opacity: prefersReducedMotion ? 1 : smoothOpacity,
        y: prefersReducedMotion ? 0 : smoothY,
        willChange: "transform, opacity",
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

// ──────────────────────────────────────────────────────────────────────────────
// 4) ParallaxGlow
//    A scroll-linked decorative glow / blur orb.
//    Moves at a configurable speed relative to scroll, adding atmospheric depth.
// ──────────────────────────────────────────────────────────────────────────────

interface ParallaxGlowProps {
  /** Extra displacement in px. Default 80. */
  offset?: number;
  direction?: "up" | "down";
  className?: string;
}

export function ParallaxGlow({
  offset = 80,
  direction = "up",
  className = "",
}: ParallaxGlowProps) {
  const { ref, y } = useParallax(offset, direction);

  return (
    <div ref={ref} className="pointer-events-none">
      <motion.div 
        style={{ y, willChange: "transform" }} 
        className={className} 
      />
    </div>
  );
}
