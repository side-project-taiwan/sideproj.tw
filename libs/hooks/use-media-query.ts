import { useCallback, useSyncExternalStore } from 'react'
import { SCREEN } from 'tailwind.config'

export const useMediaQuery = (getQuery: (_screen: typeof SCREEN) => string) => {
  const subscribe = useCallback(
    (callback: () => void) => {
      const matchMedia = window.matchMedia(getQuery(SCREEN))

      matchMedia.addEventListener('change', callback)
      return () => {
        matchMedia.removeEventListener('change', callback)
      }
    },
    [getQuery],
  )

  const getSnapshot = useCallback(() => {
    return window.matchMedia(getQuery(SCREEN)).matches
  }, [getQuery])

  const getServerSnapshot = () => {
    return true
  }

  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot)
}
