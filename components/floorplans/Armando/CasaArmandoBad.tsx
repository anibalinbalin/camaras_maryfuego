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
  imageUrl = "/images/armando_plano.png",
  dots = [
  {
    "id": "dot-1746550462383",
    "x": 10.519315943338228,
    "y": 47.69600495716905,
    "color": "red"
  },
  {
    "id": "dot-1746550489218",
    "x": 13.249520081303872,
    "y": 8.681744722540884,
    "color": "red"
  },
  {
    "id": "dot-1746550495402",
    "x": 83.5924266947717,
    "y": 26.473962302069115,
    "color": "red"
  },
  {
    "id": "dot-1746550498043",
    "x": 78.93501963588913,
    "y": 38.90707820101655,
    "color": "red"
  },
  {
    "id": "dot-1746550555017",
    "x": 39.26675951368239,
    "y": 77.17106420036342,
    "color": "red"
  },
  {
    "id": "dot-1746550556927",
    "x": 42.960565112106494,
    "y": 66.66722490642506,
    "color": "red"
  },
  {
    "id": "dot-1746550583688",
    "x": 44.08476681597471,
    "y": 31.833063982649907,
    "color": "red"
  },
  {
    "id": "dot-1746550654055",
    "x": 73.3140111165481,
    "y": 21.865134856769632,
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
