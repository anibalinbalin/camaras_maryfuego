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
  imageUrl = "/images/nido_plano.png",
  dots = [
  {
    "id": "dot-1746554499123",
    "x": 19.834130061103377,
    "y": 82.85171198177905,
    "color": "red"
  },
  {
    "id": "dot-1746554502686",
    "x": 21.118932008381325,
    "y": 54.126926973866006,
    "color": "red"
  },
  {
    "id": "dot-1746554504304",
    "x": 25.133938093624923,
    "y": 18.64967384842116,
    "color": "red"
  },
  {
    "id": "dot-1746554519202",
    "x": 86.96503180637633,
    "y": 94.6417356790568,
    "color": "red"
  },
  {
    "id": "dot-1746554520044",
    "x": 89.69523594434197,
    "y": 92.71245907404771,
    "color": "red"
  },
  {
    "id": "dot-1746554529936",
    "x": 24.49153711998595,
    "y": 78.35006657009119,
    "color": "red"
  },
  {
    "id": "dot-1746554589551",
    "x": 85.19842912886915,
    "y": 21.757952823158018,
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
