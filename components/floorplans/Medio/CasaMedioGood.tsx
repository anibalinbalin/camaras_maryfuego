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
    "id": "dot-1746554033339",
    "x": 61.268992860817306,
    "y": 77.92133843564473,
    "color": "green"
  },
  {
    "id": "dot-1746554042088",
    "x": 11.964718134025922,
    "y": 91.85500280515478,
    "color": "green"
  },
  {
    "id": "dot-1746554058331",
    "x": 12.607119107664897,
    "y": 5.68064778141564,
    "color": "green"
  },
  {
    "id": "dot-1746554066297",
    "x": 20.155330547922862,
    "y": 14.25521047034491,
    "color": "green"
  },
  {
    "id": "dot-1746554069245",
    "x": 88.24983375365429,
    "y": 20.793314520653475,
    "color": "green"
  },
  {
    "id": "dot-1746554072539",
    "x": 87.6074327800153,
    "y": 53.05510663774985,
    "color": "green"
  },
  {
    "id": "dot-1746554076204",
    "x": 72.83221038631886,
    "y": 58.95011848638872,
    "color": "green"
  },
  {
    "id": "dot-1746554079795",
    "x": 27.703541988180824,
    "y": 33.86952262127061,
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
