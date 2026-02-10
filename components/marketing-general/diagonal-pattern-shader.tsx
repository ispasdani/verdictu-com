"use effect";

import { cn } from "@/lib/utils";
import { useState } from "react";

type DiagonalPatternProps = {
  className?: string;
};

const InteractiveDiagonalPattern = ({ className }: DiagonalPatternProps) => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const svgPattern = `url("data:image/svg+xml,%3Csvg width='7' height='7' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='1' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E")`;

  return (
    <div
      className={cn(
        "relative h-full w-full border-2 border-dashed overflow-hidden bg-background",
        className,
      )}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Base faint pattern (optional, so the box isn't empty when not hovering) */}
      <div
        className="absolute inset-0 bg-slate-500/10"
        style={{ WebkitMaskImage: svgPattern, maskImage: svgPattern }}
      />

      {/* The glowing blue gradient that follows the mouse */}
      <div
        className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-600 transition-opacity duration-300"
        style={{
          opacity: isHovered ? 1 : 0,
          WebkitMaskImage: svgPattern,
          maskImage: svgPattern,
          // This creates a circle around the cursor that reveals the blue gradient!
          clipPath: `circle(150px at ${mousePos.x}px ${mousePos.y}px)`,
        }}
      />
    </div>
  );
};

export default InteractiveDiagonalPattern;
