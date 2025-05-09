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
    <Card className="p-4 mt-4">
      <div className="flex items-center justify-between">
        <Button
          variant="secondary"
          onClick={onPrevious}
          disabled={currentChapter === 1}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Anterior
        </Button>

        <div className="text-sm text-muted-foreground">
          Capítulo {currentChapter} de {totalChapters}
        </div>

        {currentChapter < totalChapters && (
          <Button 
            variant="secondary" 
            onClick={onNext} 
            className="flex items-center gap-2"
          >
            Siguiente
            <ArrowRight className="h-4 w-4" />
          </Button>
        )}
        
        {/* Add an empty div to maintain layout if button is hidden */}
        {currentChapter === totalChapters && (
          <div className="w-[115px]" /> 
        )}
      </div>
    </Card>
  )
}

export default ChapterNavigation
