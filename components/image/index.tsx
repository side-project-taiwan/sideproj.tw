import NextImage from 'next/image'
import { cn } from '@/libs/utils'

const FALLBACK_URL = 'https://placehold.co/600x400' as const

type Props = React.ComponentProps<typeof NextImage> & {
  fallbackSrc?: string
}

export const Image = ({
  src,
  fallbackSrc = FALLBACK_URL,
  className,
  ...props
}: Props) => {
  const imgUrl = src || fallbackSrc

  return (
    <NextImage
      {...props}
      src={imgUrl}
      className={cn('max-w-full', className)}
    />
  )
}
