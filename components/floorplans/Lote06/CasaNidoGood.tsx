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
  imageUrl = "/images/nido_plano.png",
  dots = [
  {
    "id": "dot-1746554821223",
    "x": 89.53463570093223,
    "y": 94.10582551099871,
    "color": "green"
  },
  {
    "id": "dot-1746554825066",
    "x": 44.72716778961368,
    "y": 73.41969302395685,
    "color": "green"
  },
  {
    "id": "dot-1746554827600",
    "x": 24.49153711998595,
    "y": 78.67161267092604,
    "color": "green"
  },
  {
    "id": "dot-1746554832637",
    "x": 19.512929574283884,
    "y": 82.85171198177905,
    "color": "green"
  },
  {
    "id": "dot-1746554837893",
    "x": 20.155330547922862,
    "y": 39.8717165035211,
    "color": "green"
  },
  {
    "id": "dot-1746554841611",
    "x": 14.37372178517208,
    "y": 3.9657352436297866,
    "color": "green"
  },
  {
    "id": "dot-1746554850459",
    "x": 25.45513858044441,
    "y": 18.006581646751464,
    "color": "green"
  },
  {
    "id": "dot-1746554851905",
    "x": 89.21343521411275,
    "y": 21.757952823158018,
    "color": "green"
  },
  {
    "id": "dot-1746554855979",
    "x": 76.68661622815272,
    "y": 68.48931947782253,
    "color": "green"
  },
  {
    "id": "dot-1746554857942",
    "x": 39.10615927027264,
    "y": 35.15570702461,
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
