import type { CSSProperties, PropsWithChildren } from 'react'
import { cn } from '@/libs/utils'
import { ScrollArea as UiScrollArea } from '@/components/ui/scroll-area'

type Props = PropsWithChildren<{
  maxWidth: CSSProperties['maxWidth']
  className?: string
}>

export const ScrollArea = ({ children, maxWidth, className }: Props) => {
  return (
    <UiScrollArea style={{ maxWidth }} className={cn(className)}>
      {children}
    </UiScrollArea>
  )
}
