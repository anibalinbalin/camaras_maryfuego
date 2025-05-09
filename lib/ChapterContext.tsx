"use client"

import { createContext, useContext, useState, type ReactNode } from "react"

type ChapterContextType = {
  currentChapter: number
  setCurrentChapter: (chapter: number) => void
}

// Export the context directly so it can be accessed with useContext
export const ChapterContext = createContext<ChapterContextType | undefined>(undefined)

export function ChapterProvider({ children }: { children: ReactNode }) {
  const [currentChapter, setCurrentChapter] = useState<number>(1)

  return <ChapterContext.Provider value={{ currentChapter, setCurrentChapter }}>{children}</ChapterContext.Provider>
}

export function useChapter() {
  const context = useContext(ChapterContext)
  if (context === undefined) {
    throw new Error("useChapter must be used within a ChapterProvider")
  }
  return context
}
