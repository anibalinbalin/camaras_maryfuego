"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, ArrowRight } from "lucide-react"

interface ChapterNavigationProps {
  currentChapter: number
  totalChapters: number
  onPrevious: () => void
  onNext: () => void
}

const ChapterNavigation = ({ currentChapter, totalChapters, onPrevious, onNext }: ChapterNavigationProps) => {
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
        
        {/* Add an empty div to maintain layout if button is hidden */}
        {currentChapter === totalChapters && (
          <div className="w-9 sm:w-[115px]" /> 
        )}
      </div>
    </Card>
  )
}

export default ChapterNavigation
