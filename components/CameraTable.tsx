import type { Camera } from "@/lib/types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Cctv, ChevronDown } from "lucide-react"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { useState, useEffect } from "react"
import { cn } from "@/lib/utils"

interface CameraTableProps {
  cameras: Camera[]
  title: string
}

const CameraTable = ({ cameras, title }: CameraTableProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener("resize", checkMobile)
    
    return () => {
      window.removeEventListener("resize", checkMobile)
    }
  }, [])

  return (
    <Card className="overflow-hidden">
      <Collapsible open={isOpen || !isMobile} onOpenChange={setIsOpen}>
        <CollapsibleTrigger className="w-full">
          <div className="p-4 bg-muted/50 border-b flex items-center justify-between w-full">
            <div className="flex items-center gap-2">
              <Cctv className={`h-5 w-5 ${cameras[0]?.isNew ? "text-camera-new" : "text-camera-old"}`} />
              <h3 className="font-medium">{title}</h3>
            </div>
            <ChevronDown className={cn("h-4 w-4 transition-transform md:hidden", isOpen && "rotate-180")} />
          </div>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Cámara</TableHead>
                  <TableHead>Ubicación</TableHead>
                  <TableHead>Tipo</TableHead>
                  <TableHead className="text-right">Cobertura</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {cameras.map((camera) => (
                  <TableRow key={camera.id}>
                    <TableCell className="font-medium">{camera.id}</TableCell>
                    <TableCell>{camera.name}</TableCell>
                    <TableCell>{camera.type}</TableCell>
                    <TableCell className="text-right">{camera.coverage}%</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  )
}

export default CameraTable
