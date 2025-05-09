import React from "react";

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
    "id": "dot-1746551532511",
    "x": 12.928319594484385,
    "y": 92.17654890598963,
    "color": "red"
  },
  {
    "id": "dot-1746551533827",
    "x": 12.928319594484385,
    "y": 61.629669326679114,
    "color": "red"
  },
  {
    "id": "dot-1746551535103",
    "x": 11.964718134025922,
    "y": 41.15790090686049,
    "color": "red"
  },
  {
    "id": "dot-1746551536488",
    "x": 20.155330547922862,
    "y": 13.612118268675214,
    "color": "red"
  },
  {
    "id": "dot-1746551538384",
    "x": 82.95002572113273,
    "y": 20.68613248704186,
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
  // Generate the animation CSS
  const generateAnimationStyles = () => {
    const intensity = animationOptions.intensity;
    
    return `
      @keyframes glowGreen {
        0%, 100% {
          box-shadow: 0 0 5px rgba(34, 197, 94, 0.5);
        }
        50% {
          box-shadow: 0 0 ${Math.round(15 * intensity)}px ${Math.round(5 * intensity)}px rgba(34, 197, 94, 0.8);
        }
      }
      
      @keyframes glowRed {
        0%, 100% {
          box-shadow: 0 0 5px rgba(239, 68, 68, 0.5);
        }
        50% {
          box-shadow: 0 0 ${Math.round(15 * intensity)}px ${Math.round(5 * intensity)}px rgba(239, 68, 68, 0.8);
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
