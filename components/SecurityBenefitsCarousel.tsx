"use client"
import {
  SecurityCarousel,
  SecurityCard,
  type SecurityCard as SecurityCardType,
} from "@/components/ui/security-cards-carousel"
import { ShieldCheck, Camera, Cpu, Eye, Zap, Lock, Bell, Cloud, Server } from "lucide-react"

export function SecurityBenefitsCarousel() {
  const FeatureItem = ({ text }: { text: string }) => (
    <div className="flex items-start gap-2 mb-2">
      <div className="rounded-full bg-primary/10 p-1 mt-0.5 shrink-0">
        <ShieldCheck className="h-3 w-3 text-primary" />
      </div>
      <span className="text-sm text-muted-foreground">{text}</span>
    </div>
  )

  const cards: SecurityCardType[] = [
    {
      category: "Advanced Coverage",
      title: "Complete Surveillance with Minimal Blind Spots",
      icon: <Eye className="h-5 w-5 text-primary" />,
      src: "/images/hardware/alpha/UVC-G5-PTZ_alpha.png",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Our strategic camera placement ensures maximum coverage with minimal hardware. The new system provides
            comprehensive surveillance with virtually no blind spots.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Features</h3>
              <div className="space-y-2">
                <FeatureItem text="Up to 134.1° diagonal field of view for maximum coverage" />
                <FeatureItem text="350° pan and 100° tilt range on PTZ cameras for dynamic monitoring" />
                <FeatureItem text="IP66/IP65 weatherproof rating ensures reliability in all conditions" />
                <FeatureItem text="Automatic tracking of moving subjects" />
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">Coverage Improvement</h4>
                <div className="flex justify-center items-center gap-8 mt-4">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-red-500">42%</div>
                    <div className="text-xs text-muted-foreground mt-1">Before</div>
                  </div>
                  <div className="text-4xl">→</div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-green-500">98%</div>
                    <div className="text-xs text-muted-foreground mt-1">After</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "4K Resolution",
      title: "Crystal Clear Footage with Ultra-HD Cameras",
      icon: <Camera className="h-5 w-5 text-primary" />,
      src: "/images/hardware/alpha/UVC-AI-Pro_alpha.png",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Our 4K Ultra-HD cameras provide exceptional detail and clarity, ensuring you can identify faces, license
            plates, and other critical details even in challenging conditions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Features</h3>
              <div className="space-y-2">
                <FeatureItem text="8MP (4K) resolution at critical entry points for crystal clear footage" />
                <FeatureItem text="Night vision up to 40m (131ft) for 24/7 monitoring capability" />
                <FeatureItem text="Identify faces and license plates with exceptional clarity" />
                <FeatureItem text="Digital zoom without losing critical details" />
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">Resolution Comparison</h4>
                <div className="grid grid-cols-3 gap-2 mt-4">
                  <div className="text-center">
                    <div className="text-sm font-medium">1080p</div>
                    <div className="text-xs text-muted-foreground mt-1">Standard</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium">2K</div>
                    <div className="text-xs text-muted-foreground mt-1">High</div>
                  </div>
                  <div className="text-center">
                    <div className="text-sm font-medium text-primary">4K</div>
                    <div className="text-xs text-muted-foreground mt-1">Ultra</div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-muted-foreground">
                  4K provides 4x the detail of standard 1080p cameras
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "AI-Powered Security",
      title: "Intelligent Detection and Smart Alerts",
      icon: <Cpu className="h-5 w-5 text-primary" />,
      src: "/images/hardware/alpha/UP-AI-Port_alpha.png",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Our AI-powered security system intelligently detects and classifies objects, reducing false alarms while
            ensuring you're alerted to genuine security concerns.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Features</h3>
              <div className="space-y-2">
                <FeatureItem text="Face and license plate recognition" />
                <FeatureItem text="Smart detection of people, vehicles, and animals" />
                <FeatureItem text="Automatic person tracking with PTZ cameras" />
                <FeatureItem text="Customizable alert zones and triggers" />
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">AI Benefits</h4>
                <div className="space-y-3 mt-4 text-left">
                  <div className="flex items-center justify-between">
                    <span className="text-xs">False Alarms</span>
                    <span className="text-xs font-medium text-green-500">Reduced by 85%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Detection Accuracy</span>
                    <span className="text-xs font-medium text-green-500">Increased to 98%</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Response Time</span>
                    <span className="text-xs font-medium text-green-500">Reduced by 60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "Smart Integration",
      title: "Seamless Connection with Your Smart Home",
      icon: <Zap className="h-5 w-5 text-primary" />,
      src: "/images/hardware/alpha/UCG-Ultra_alpha.png",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Our security system integrates seamlessly with your existing smart home setup, providing comprehensive
            security management through a single interface.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Features</h3>
              <div className="space-y-2">
                <FeatureItem text="AI-powered detection minimizes false alarms for reliable alerts" />
                <FeatureItem text="Mobile app provides remote monitoring from anywhere, anytime" />
                <FeatureItem text="Centralized management of all security devices through one interface" />
                <FeatureItem text="Voice assistant compatibility for hands-free control" />
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">Compatible With</h4>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div className="text-center p-2 rounded-lg bg-muted/50">
                    <div className="text-sm">Smart Lighting</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-muted/50">
                    <div className="text-sm">Smart Locks</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-muted/50">
                    <div className="text-sm">Voice Assistants</div>
                  </div>
                  <div className="text-center p-2 rounded-lg bg-muted/50">
                    <div className="text-sm">Home Automation</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "Reliable Storage",
      title: "Secure, Redundant Storage for Your Footage",
      icon: <Server className="h-5 w-5 text-primary" />,
      src: "/images/hardware/alpha/UniFi UNVR_alpha.png",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Our storage solutions ensure your security footage is always available when you need it, with redundant
            storage options and flexible retention policies.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Features</h3>
              <div className="space-y-2">
                <FeatureItem text="24TB raw storage with RAID redundancy" />
                <FeatureItem text="Support for up to 18 4K cameras" />
                <FeatureItem text="30+ days of continuous recording" />
                <FeatureItem text="Automatic backup options to cloud storage" />
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">Storage Capacity</h4>
                <div className="mt-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs">4K Cameras</span>
                    <span className="text-xs font-medium">Up to 18</span>
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs">Storage Capacity</span>
                    <span className="text-xs font-medium">24TB</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs">Retention Period</span>
                    <span className="text-xs font-medium">30+ days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
    {
      category: "Mobile Access",
      title: "Monitor Your Property from Anywhere",
      icon: <Bell className="h-5 w-5 text-primary" />,
      src: "/placeholder.svg?key=m2qd2",
      content: (
        <div className="space-y-6">
          <p className="text-muted-foreground">
            Our mobile app gives you complete control over your security system from anywhere in the world, allowing you
            to monitor your property, receive alerts, and control cameras remotely.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <h3 className="text-lg font-medium">Key Features</h3>
              <div className="space-y-2">
                <FeatureItem text="Live view of all cameras from your smartphone or tablet" />
                <FeatureItem text="Instant notifications for security events" />
                <FeatureItem text="PTZ camera control from your mobile device" />
                <FeatureItem text="Secure access with biometric authentication" />
              </div>
            </div>
            <div className="bg-muted/30 rounded-lg p-6">
              <div className="text-center mb-4">
                <h4 className="text-sm font-medium text-muted-foreground">Mobile App Features</h4>
                <div className="space-y-3 mt-4 text-left">
                  <div className="flex items-center gap-2">
                    <Lock className="h-4 w-4 text-primary" />
                    <span className="text-xs">Secure remote access</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Eye className="h-4 w-4 text-primary" />
                    <span className="text-xs">Live & recorded footage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Bell className="h-4 w-4 text-primary" />
                    <span className="text-xs">Customizable notifications</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Cloud className="h-4 w-4 text-primary" />
                    <span className="text-xs">Cloud backup options</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ]

  const cardComponents = cards.map((card, index) => <SecurityCard key={card.title} card={card} index={index} />)

  return (
    <div className="w-full">
      <SecurityCarousel items={cardComponents} />
    </div>
  )
}
