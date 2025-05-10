import React from "react";
import { useTheme } from "next-themes";

interface DotPlacementComponentProps {
  className?: string;
  imageUrl?: string;
  dots?: {
    id: string;
    x: number;
    y: number;
    color: "green" | "red";
  }[];
  animationOptions?: {
    enabled: boolean;
    duration: number;
    intensity: number;
  };
  onDotClick?: (id: string) => void;
}

export const DotPlacementComponent: React.FC<DotPlacementComponentProps> = ({
  className,
  imageUrl = "/images/medio_plano.png",
  dots = [
  {
    "id": "dot-1746553801486",
    "x": 11.964718134025922,
    "y": 90.8909755946121,
    "color": "red"
  },
  {
    "id": "dot-1746553803908",
    "x": 26.0981400671262,
    "y": 32.04327391792097,
    "color": "red"
  },
  {
    "id": "dot-1746553805908",
    "x": 88.24983375365429,
    "y": 21.114860621489217,
    "color": "red"
  },
  {
    "id": "dot-1746553807581",
    "x": 87.92803326683481,
    "y": 52.63792456558341,
    "color": "red"
  },
  {
    "id": "dot-1746553809797",
    "x": 68.7823336099449,
    "y": 58.3276444396983,
    "color": "red"
  },
  {
    "id": "dot-1746553811654",
    "x": 12.607119107664897,
    "y": 6.001647815960121,
    "color": "red"
  }
],
  animationOptions = {
    enabled: true,
    duration: 2,
    intensity: 0.5
  },
  onDotClick,
}) => {
  const { theme } = useTheme();
  const isDarkMode = theme === "dark";
  
  // Generate the animation CSS
  const generateAnimationStyles = () => {
    const intensity = animationOptions.intensity;
    const darkModeMultiplier = isDarkMode ? 2.5 : 1; // Increase intensity for dark mode
    
    return `
      @keyframes glowGreen {
        0%, 100% {
          box-shadow: 0 0 5px rgba(34, 197, 94, ${isDarkMode ? 0.7 : 0.5});
          border: ${isDarkMode ? '1px solid rgba(34, 197, 94, 0.8)' : 'none'};
        }
        50% {
          box-shadow: 0 0 ${Math.round(15 * intensity * darkModeMultiplier)}px ${Math.round(5 * intensity * darkModeMultiplier)}px rgba(34, 197, 94, ${isDarkMode ? 0.9 : 0.8});
          border: ${isDarkMode ? '1px solid rgba(34, 197, 94, 1)' : 'none'};
        }
      }
      
      @keyframes glowRed {
        0%, 100% {
          box-shadow: 0 0 5px rgba(239, 68, 68, ${isDarkMode ? 0.7 : 0.5});
          border: ${isDarkMode ? '1px solid rgba(239, 68, 68, 0.8)' : 'none'};
        }
        50% {
          box-shadow: 0 0 ${Math.round(15 * intensity * darkModeMultiplier)}px ${Math.round(5 * intensity * darkModeMultiplier)}px rgba(239, 68, 68, ${isDarkMode ? 0.9 : 0.8});
          border: ${isDarkMode ? '1px solid rgba(239, 68, 68, 1)' : 'none'};
        }
      }
      
      .dot-green {
        animation: ${animationOptions.enabled ? `glowGreen ${animationOptions.duration}s infinite ease-in-out` : 'none'};
        will-change: box-shadow;
      }
      
      .dot-red {
        animation: ${animationOptions.enabled ? `glowRed ${animationOptions.duration}s infinite ease-in-out` : 'none'};
        will-change: box-shadow;
      }
    `;
  };

  return (
    <div className={`relative ${className || ""}`}>
      <style>{`${generateAnimationStyles()}`}</style>
      <img 
        src={imageUrl || "/placeholder.svg"} 
        alt="Background" 
        className="w-full h-auto"
      />
      {dots.map((dot) => (
        <div
          key={dot.id}
          onClick={() => onDotClick?.(dot.id)}
          className={`absolute w-4 h-4 rounded-full cursor-pointer ${
            dot.color === "green" ? "bg-green-500 dot-green" : "bg-red-500 dot-red"
          }`}
          style={{
            left: `${dot.x}%`,
            top: `${dot.y}%`,
            transform: "translate(-50%, -50%)",
          }}
          aria-label={`${dot.color} dot at position ${dot.x.toFixed(1)}, ${dot.y.toFixed(1)}`}
        />
      ))}
    </div>
  );
};
