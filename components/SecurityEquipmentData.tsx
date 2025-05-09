import type { EquipmentItem } from "@/components/ui/expandable-equipment-card"

export const securityEquipmentData: EquipmentItem[] = [
  {
    id: "ucg-ultra",
    title: "UCG-Ultra Gateway",
    description: "Powerful gateway for managing your entire UniFi ecosystem",
    price: 1999,
    quantity: 3,
    src: "/images/hardware/alpha/UCG-Ultra_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The UCG-Ultra is the central brain of your UniFi security system, providing powerful management capabilities
          for your entire network of security devices.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Manages up to 30+ UniFi devices simultaneously</li>
          <li>1 Gbps IPS routing capability for high-speed data processing</li>
          <li>Multi-WAN load balancing for network redundancy</li>
          <li>Advanced security features including threat management</li>
          <li>Intuitive management interface accessible from any device</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Processor: Quad-core ARM Cortex-A57 at 1.7 GHz</li>
          <li>Memory: 4 GB DDR4 RAM</li>
          <li>Storage: 32 GB eMMC flash storage</li>
          <li>Networking: 8× 10/100/1000 RJ45 ports</li>
          <li>Dimensions: 11.02 × 7.28 × 1.73" (280 × 185 × 44 mm)</li>
          <li>Power: 100-240VAC/50-60 Hz, universal input</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Warranty: 2-year limited hardware warranty included. Extended warranty available for purchase.
        </p>
      </div>
    ),
  },
  {
    id: "unifi-unvr",
    title: "UniFi UNVR",
    description: "Network video recorder with expandable storage",
    price: 399,
    quantity: 3,
    src: "/images/hardware/alpha/UniFi UNVR_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The UniFi Network Video Recorder (UNVR) is a powerful and reliable solution for storing and managing security
          camera footage with expandable storage options.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Supports up to 4 hard drives (up to 24TB total storage)</li>
          <li>Records up to 18 4K cameras simultaneously</li>
          <li>RAID configuration for data redundancy and protection</li>
          <li>Integrated with UniFi Protect for seamless management</li>
          <li>Motion detection and smart alerts</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Processor: Quad-core ARM Cortex-A57 at 1.7 GHz</li>
          <li>Memory: 4 GB DDR4 RAM</li>
          <li>Storage Bays: 4× 3.5" SATA HDD bays</li>
          <li>Networking: 1× 10/100/1000 RJ45 port</li>
          <li>Dimensions: 8.66 × 4.33 × 10.63" (220 × 110 × 270 mm)</li>
          <li>Power: 100-240VAC/50-60 Hz, universal input</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Warranty: 1-year limited hardware warranty included. Extended warranty available for purchase.
        </p>
      </div>
    ),
  },
  {
    id: "hdd-6tb",
    title: "HDD 6TB",
    description: "Surveillance-grade hard drive for 24/7 operation",
    price: 199,
    quantity: 12,
    src: "/images/hardware/alpha/HDD.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          These surveillance-grade 6TB hard drives are specifically designed for 24/7 continuous operation in security
          systems, offering reliability and performance.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>6TB capacity per drive (24TB total with 4 drives)</li>
          <li>Designed for 24/7 continuous operation</li>
          <li>Optimized for surveillance workloads</li>
          <li>Low power consumption and heat generation</li>
          <li>Enhanced vibration tolerance for multi-drive systems</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Capacity: 6TB per drive</li>
          <li>Interface: SATA 6 Gb/s</li>
          <li>Form Factor: 3.5-inch</li>
          <li>Rotational Speed: 7200 RPM</li>
          <li>Cache: 256MB</li>
          <li>MTBF: 1 million hours</li>
          <li>Workload Rate: 180TB/year</li>
        </ul>
        <p className="text-sm text-muted-foreground">Warranty: 3-year limited warranty included.</p>
      </div>
    ),
  },
  {
    id: "usw-lite-16-poe",
    title: "USW Lite 16 PoE",
    description: "16-Port Gigabit PoE Switch for network connectivity",
    price: 299,
    quantity: 6,
    src: "/images/hardware/alpha/USW Lite 16 PoE_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The USW Lite 16 PoE switch provides reliable network connectivity for your security system with PoE capability to power cameras and other devices.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>16 Gigabit RJ45 ports with PoE capability</li>
          <li>Easy integration with UniFi Network</li>
          <li>Centralized management through the UniFi Controller</li>
          <li>Reliable performance for security devices</li>
          <li>Fanless design for silent operation</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Ports: 16× Gigabit RJ45 with PoE</li>
          <li>PoE Available: 802.3af/at PoE+</li>
          <li>Total PoE Budget: 45W</li>
          <li>Switching Capacity: 32 Gbps</li>
          <li>Dimensions: 11.4 × 8.3 × 1.7" (285 × 210 × 43 mm)</li>
          <li>Power: 56W max with PoE</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Warranty: 1-year limited hardware warranty included.
        </p>
      </div>
    ),
  },
  {
    id: "uvc-g6-turret-w",
    title: "UVC-G6-Turret-W",
    description: "4K turret camera ideal for entrance monitoring",
    price: 299,
    quantity: 4,
    src: "/images/hardware/alpha/UVC-AI-Turret (Door)_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The UVC-G6-Turret-W is a perfect solution for entrance monitoring with its compact design and powerful capabilities.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>4K resolution for crystal clear footage</li>
          <li>130° diagonal field of view for wide coverage</li>
          <li>30m night vision range for 24/7 monitoring</li>
          <li>Weather-resistant design for outdoor installation</li>
          <li>Two-way audio communication</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Image Sensor: 1/1.8" 8MP progressive scan CMOS</li>
          <li>Lens: 4mm fixed lens</li>
          <li>Angle of View: 130° diagonal</li>
          <li>IR Range: Up to 30m (98ft)</li>
          <li>IP Rating: IP67 weatherproof</li>
          <li>Power: PoE (802.3af)</li>
          <li>Dimensions: 4.9 × 4.9 × 3.7" (124 × 124 × 94 mm)</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Warranty: 2-year limited hardware warranty included.
        </p>
      </div>
    ),
  },
  {
    id: "uvc-g6-bullet-w",
    title: "UVC-G6-Bullet-W",
    description: "4K bullet camera for access points and perimeter",
    price: 349,
    quantity: 6,
    src: "/images/hardware/alpha/UVC-AI-Pro_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The UVC-G6-Bullet-W is designed for monitoring access points and perimeters with its powerful zoom and weather-resistant design.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>4K resolution for exceptional detail</li>
          <li>Advanced IR for superior night vision</li>
          <li>Smart object detection</li>
          <li>IP67 weatherproof for outdoor installation</li>
          <li>Integrated IR illumination up to 50m</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Image Sensor: 1/1.8" 8MP progressive scan CMOS</li>
          <li>Lens: 4.24-12.66mm motorized zoom lens</li>
          <li>Angle of View: 37°-112° horizontal</li>
          <li>IR Range: Up to 50m (164ft)</li>
          <li>IP Rating: IP67 weatherproof</li>
          <li>Power: PoE (802.3at)</li>
          <li>Dimensions: 5.9 × 3.1 × 3.1" (150 × 80 × 80 mm)</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Warranty: 2-year limited hardware warranty included.
        </p>
      </div>
    ),
  },
  {
    id: "uvc-g6-ptz-b",
    title: "UVC-G6-PTZ-B",
    description: "Advanced PTZ camera with 4K resolution and 360° coverage",
    price: 1999,
    quantity: 23,
    src: "/images/hardware/alpha/UVC-G5-PTZ_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The UVC-G6-PTZ-B offers complete coverage with its pan-tilt-zoom capabilities, making it ideal for
          monitoring large perimeters and property borders.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>4K resolution for clear, detailed footage</li>
          <li>350° pan and 100° tilt range for comprehensive coverage</li>
          <li>20x optical zoom for detailed monitoring of distant objects</li>
          <li>30m night vision capability for 24/7 surveillance</li>
          <li>Auto-tracking of moving subjects</li>
          <li>Preset positions and patrol patterns</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Image Sensor: 1/2.8" 4K progressive scan CMOS</li>
          <li>Lens: 4.7-94mm motorized zoom lens (20x optical zoom)</li>
          <li>Pan/Tilt Range: 350° pan, 100° tilt</li>
          <li>IR Range: Up to 30m (100ft)</li>
          <li>IP Rating: IP66 weatherproof</li>
          <li>Power: PoE++ (802.3bt) or 24V adapter</li>
          <li>Dimensions: 7.9 × 7.9 × 11.8" (200 × 200 × 300 mm)</li>
        </ul>
        <p className="text-sm text-muted-foreground">
          Warranty: 2-year limited hardware warranty included.
        </p>
      </div>
    ),
  },
  {
    id: "g6-ptz-corner-mount",
    title: "G6 PTZ Corner Mount",
    description: "Specialized mount for optimal PTZ camera positioning",
    price: 79,
    quantity: 7,
    src: "/images/hardware/alpha/G5 PTZ Corner Mount_alpha.png",
    ctaText: "View Details",
    house: "armando",
    content: (
      <div className="space-y-4">
        <p>
          The G6 PTZ Corner Mount is specially designed to maximize the coverage area of your PTZ cameras by positioning
          them in corners for optimal viewing angles.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Designed specifically for corner installation</li>
          <li>Maximizes camera coverage area</li>
          <li>Durable weather-resistant construction</li>
          <li>Easy installation with included hardware</li>
          <li>Compatible with G6 PTZ camera models</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Material: Die-cast aluminum</li>
          <li>Finish: Powder-coated for weather resistance</li>
          <li>Load Capacity: Up to 15kg (33lbs)</li>
          <li>Mounting: Wall/corner mounting with expansion bolts</li>
          <li>Dimensions: 8.7 × 6.3 × 5.1" (220 × 160 × 130 mm)</li>
          <li>Weight: 1.5kg (3.3lbs)</li>
        </ul>
        <p className="text-sm text-muted-foreground">Warranty: 1-year limited hardware warranty included.</p>
      </div>
    ),
  },
  {
    id: "g5-ptz-corner-mount",
    title: "G5 PTZ Corner Mount",
    description: "Specialized mount for optimal PTZ camera positioning",
    price: 79,
    quantity: 14,
    src: "/images/hardware/alpha/G5 PTZ Corner Mount_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The G5 PTZ Corner Mount is specially designed to maximize the coverage area of your PTZ cameras by positioning
          them in corners for optimal viewing angles.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Designed specifically for corner installation</li>
          <li>Maximizes camera coverage area</li>
          <li>Durable weather-resistant construction</li>
          <li>Easy installation with included hardware</li>
          <li>Compatible with G5 PTZ camera models</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Material: Die-cast aluminum</li>
          <li>Finish: Powder-coated for weather resistance</li>
          <li>Load Capacity: Up to 15kg (33lbs)</li>
          <li>Mounting: Wall/corner mounting with expansion bolts</li>
          <li>Dimensions: 8.7 × 6.3 × 5.1" (220 × 160 × 130 mm)</li>
          <li>Weight: 1.5kg (3.3lbs)</li>
        </ul>
        <p className="text-sm text-muted-foreground">Warranty: 1-year limited hardware warranty included.</p>
      </div>
    ),
  },
  {
    id: "u-poe-plus-plus",
    title: "U-PoE++ Adapter",
    description: "High-power PoE adapter for demanding devices",
    price: 99,
    quantity: 23,
    src: "/images/hardware/alpha/U-PoE++_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The U-PoE++ Adapter provides high-power delivery over Ethernet cables, enabling the operation of power-hungry
          devices like PTZ cameras without separate power supplies.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>60W power output for demanding devices</li>
          <li>Powers high-performance cameras and access points</li>
          <li>Compatible with all UniFi devices</li>
          <li>Plug-and-play installation</li>
          <li>Status LED indicators for easy troubleshooting</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Standard: IEEE 802.3bt (PoE++)</li>
          <li>Power Output: Up to 60W</li>
          <li>Input: 100-240VAC, 50/60Hz</li>
          <li>Output: 54VDC, 1.11A</li>
          <li>Ports: 2× Gigabit RJ45 (Data In, PoE Out)</li>
          <li>Dimensions: 3.9 × 2.4 × 1.3" (100 × 60 × 33 mm)</li>
        </ul>
        <p className="text-sm text-muted-foreground">Warranty: 1-year limited hardware warranty included.</p>
      </div>
    ),
  },
  {
    id: "up-ai-port",
    title: "UP-AI-Port",
    description: "AI processing module for enhanced camera capabilities",
    price: 149,
    quantity: 15,
    src: "/images/hardware/alpha/UP-AI-Port_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The UP-AI-Port is an advanced AI processing module that enhances the capabilities of your security cameras
          with intelligent detection and recognition features.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Adds AI features to any compatible camera</li>
          <li>Face and license plate recognition capabilities</li>
          <li>Smart detection of people, vehicles, and animals</li>
          <li>Reduces false alarms with intelligent analysis</li>
          <li>Easy integration with UniFi Protect</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Processor: Neural processing unit with 5 TOPS</li>
          <li>Memory: 4GB LPDDR4</li>
          <li>Storage: 32GB eMMC</li>
          <li>Interface: Gigabit Ethernet</li>
          <li>Power: PoE (802.3af) or USB-C</li>
          <li>Dimensions: 4.3 × 4.3 × 1.2" (110 × 110 × 30 mm)</li>
        </ul>
        <p className="text-sm text-muted-foreground">Warranty: 2-year limited hardware warranty included.</p>
      </div>
    ),
  },
  {
    id: "uacc-ai-port-rm",
    title: "UACC-AI-Port-RM",
    description: "Rack mount for organizing multiple AI Ports",
    price: 199,
    quantity: 4,
    src: "/images/hardware/alpha/UACC-AI-Port-RM_alpha.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          The UACC-AI-Port-RM is a rack-mountable chassis designed to organize and manage multiple UP-AI-Port modules in
          a centralized location.
        </p>
        <h4 className="font-semibold text-base">Key Features:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Supports up to 6 AI Ports per unit</li>
          <li>Standard 19" rack mount design</li>
          <li>Efficient cable management</li>
          <li>Integrated cooling system</li>
          <li>Status LED indicators for each port</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Form Factor: 1U rack mount</li>
          <li>Capacity: 6× UP-AI-Port modules</li>
          <li>Power: 100-240VAC, 50/60Hz</li>
          <li>Cooling: Integrated fans with temperature control</li>
          <li>Dimensions: 19 × 10 × 1.75" (483 × 254 × 44 mm)</li>
          <li>Weight: 2.5kg (5.5lbs) without modules</li>
        </ul>
        <p className="text-sm text-muted-foreground">Warranty: 1-year limited hardware warranty included.</p>
      </div>
    ),
  },
  {
    id: "rack-accessories",
    title: "Rack & Accessories",
    description: "Rack, organizer, patch panel, and cables for installation",
    price: 300,
    quantity: 3,
    src: "/images/hardware/alpha/Rack.png",
    ctaText: "View Details",
    house: "all",
    content: (
      <div className="space-y-4">
        <p>
          Complete rack mounting solution including rack, cable organizer, patch panel, and all 
          necessary patchcords for a clean, professional installation.
        </p>
        <h4 className="font-semibold text-base">Includes:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Wall-mountable network rack</li>
          <li>Cable management organizer</li>
          <li>24-port patch panel</li>
          <li>High-quality CAT6 patchcords in various lengths</li>
          <li>Mounting hardware and accessories</li>
        </ul>
        <h4 className="font-semibold text-base">Technical Specifications:</h4>
        <ul className="list-disc pl-5 space-y-1">
          <li>Rack Size: 12U wall-mount</li>
          <li>Material: Steel construction</li>
          <li>Patch Panel: 24-port CAT6</li>
          <li>Cable Organizer: 1U horizontal</li>
          <li>Patchcords: CAT6 UTP with snagless boots</li>
        </ul>
        <p className="text-sm text-muted-foreground">Warranty: 1-year limited hardware warranty included.</p>
      </div>
    ),
  },
]

// Add footer section showing total investment
export const totalInvestment = {
  amount: 67987,
  currency: "USD",
  note: "Inversión final para las tres casas: U$S 67,987 más IVA"
}
