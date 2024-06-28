import NextImage from 'next/image'
import { cn } from '@/libs/utils'

// TODO: update the fallback image url from design
const FALLBACK_URL = 'https://placehold.co/600x400' as const

type Props = React.ComponentProps<typeof NextImage> & {
  fallbackSrc?: string
}

export const Image = ({
  src,
  className,
  style,
  width,
  height,
  fallbackSrc = FALLBACK_URL,
  ...props
}: Props) => {
  const imgUrl = src || fallbackSrc
  const imgSizesProps =
    width && height
      ? { width, height, style: { width: 'auto', height: 'auto', ...style } }
      : { style }

  return (
    <NextImage
      {...props}
      {...imgSizesProps}
      src={imgUrl}
      className={cn('max-w-full', className)}
    />
  )
}
