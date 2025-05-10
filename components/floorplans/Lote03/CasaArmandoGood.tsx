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
  imageUrl = "/images/armando_plano.png",
  dots = [
  {
    "id": "dot-1746550873615",
    "x": 11.161716916977202,
    "y": 89.71136213292247,
    "color": "green"
  },
  {
    "id": "dot-1746550876240",
    "x": 11.161716916977202,
    "y": 45.766728352159966,
    "color": "green"
  },
  {
    "id": "dot-1746550877614",
    "x": 9.87691496969925,
    "y": 3.9657352436297866,
    "color": "green"
  },
  {
    "id": "dot-1746550879310",
    "x": 14.213121541762336,
    "y": 8.467380655317653,
    "color": "green"
  },
  {
    "id": "dot-1746550882343",
    "x": 91.14063813502968,
    "y": 4.287281344464635,
    "color": "green"
  },
  {
    "id": "dot-1746550909568",
    "x": 39.427359757092134,
    "y": 79.42188690620735,
    "color": "green"
  },
  {
    "id": "dot-1746550939447",
    "x": 80.86222255680606,
    "y": 37.29934769684232,
    "color": "green"
  },
  {
    "id": "dot-1746550998921",
    "x": 81.82582401726452,
    "y": 20.68613248704186,
    "color": "green"
  },
  {
    "id": "dot-1746551006585",
    "x": 26.418740040902875,
    "y": 22.186680957604484,
    "color": "green"
  },
  {
    "id": "dot-1746551017174",
    "x": 68.01420308402655,
    "y": 27.009872470127195,
    "color": "green"
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
