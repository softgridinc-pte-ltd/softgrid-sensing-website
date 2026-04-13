'use client'

import { useMemo, useState, useCallback } from 'react'
import Fuse from 'fuse.js'
import { searchIndex } from '@/data/searchIndex'

import type { SearchEntry } from '@/data/searchIndex'
import type { IFuseOptions } from 'fuse.js'

const fuseOptions: IFuseOptions<SearchEntry> = {
  keys: [
    { name: 'title', weight: 0.4 },
    { name: 'keywords', weight: 0.3 },
    { name: 'description', weight: 0.2 },
    { name: 'category', weight: 0.1 },
  ],
  threshold: 0.4,
  includeScore: true,
  minMatchCharLength: 2,
}

interface UseSearchReturn {
  search: (query: string) => SearchEntry[]
  activeIndex: number
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>
  resetActiveIndex: () => void
}

export function useSearch(): UseSearchReturn {
  const fuse = useMemo(() => new Fuse(searchIndex, fuseOptions), [])
  const [activeIndex, setActiveIndex] = useState(-1)

  const search = useCallback((query: string): SearchEntry[] => {
    if (!query || query.length < 2) return []
    return fuse.search(query, { limit: 8 }).map((r) => r.item)
  }, [fuse])

  const resetActiveIndex = useCallback(() => {
    setActiveIndex(-1)
  }, [])

  return { search, activeIndex, setActiveIndex, resetActiveIndex }
}
