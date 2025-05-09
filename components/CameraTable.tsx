import type { Camera } from "@/lib/types"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card } from "@/components/ui/card"
import { Cctv } from "lucide-react"

interface CameraTableProps {
  cameras: Camera[]
  title: string
}

const CameraTable = ({ cameras, title }: CameraTableProps) => {
  return (
    <Card className="overflow-hidden">
      <div className="p-4 bg-muted/50 border-b flex items-center gap-2">
        <Cctv className={`h-5 w-5 ${cameras[0]?.isNew ? "text-camera-new" : "text-camera-old"}`} />
        <h3 className="font-medium">{title}</h3>
      </div>
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
    </Card>
  )
}

export default CameraTable
