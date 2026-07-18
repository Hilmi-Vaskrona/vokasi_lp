import { schools, type School } from '@/data/schools'

const STORAGE_KEY = 'vokasi_school_clicks'

function getClickCountsFromStorage(): Record<string, number> {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    return raw ? JSON.parse(raw) : {}
  } catch {
    return {}
  }
}

export function trackClick(schoolId: string): void {
  const counts = getClickCountsFromStorage()
  counts[schoolId] = (counts[schoolId] || 0) + 1
  localStorage.setItem(STORAGE_KEY, JSON.stringify(counts))
}

export function getTopSchools(limit: number = 5): (School & { clicks: number })[] {
  const counts = getClickCountsFromStorage()

  return schools
    .map(s => ({ ...s, clicks: counts[s.id] || 0 }))
    .sort((a, b) => b.clicks - a.clicks)
    .slice(0, limit)
}

export function getClickCounts(): Record<string, number> {
  return getClickCountsFromStorage()
}
