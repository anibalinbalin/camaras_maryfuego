"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight, Home } from "lucide-react"
import { useRouter } from "next/navigation"

interface ChapterNavigationProps {
  currentChapter: number
  totalChapters: number
  onPrevious: () => void
  onNext: () => void
}

const ChapterNavigation = ({ currentChapter, totalChapters, onPrevious, onNext }: ChapterNavigationProps) => {
  const router = useRouter()
  
  const handleHomeClick = () => {
    router.push("/")
  }
  
  return (
    <Card className="p-3 sm:p-4 mt-4">
      <div className="flex items-center justify-between">
        <Button
          variant="outline"
          size="icon"
          onClick={onPrevious}
          disabled={currentChapter === 1}
          className="h-9 w-9 sm:h-10 sm:w-auto sm:px-4 flex items-center gap-2"
          aria-label="Anterior"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="hidden sm:inline">Anterior</span>
        </Button>

        <div className="text-sm text-muted-foreground mx-1 sm:mx-4">
          Capítulo {currentChapter} de {totalChapters}
        </div>

        {currentChapter < totalChapters && (
          <Button 
            variant="outline" 
            size="icon"
            onClick={onNext} 
            className="h-9 w-9 sm:h-10 sm:w-auto sm:px-4 flex items-center gap-2"
            aria-label="Siguiente"
          >
            <span className="hidden sm:inline">Siguiente</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
        
        {/* Replace empty div with Home button when on the last chapter */}
        {currentChapter === totalChapters && (
          <Button
            variant="outline"
            size="icon"
            onClick={handleHomeClick}
            className="h-9 w-9 sm:h-10 sm:w-auto sm:px-4 flex items-center gap-2"
            aria-label="Home"
          >
            <Home className="h-4 w-4" />
          </Button>
        )}
      </div>
    </Card>
  )
}

export default ChapterNavigation
