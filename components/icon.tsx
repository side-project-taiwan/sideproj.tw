import Image from 'next/image'
import { ComponentProps } from 'react'

const IconMapping = {
  'arrow-left': '/arrow-left.svg',
} as const

type ImageProps = Omit<ComponentProps<typeof Image>, 'src' | 'alt'>

type IconProps = ImageProps & {
  type: keyof typeof IconMapping
  size?: ImageProps['width']
}

export const Icon = ({
  type,
  size,
  width,
  height,
  fill,
  ...imgProps
}: IconProps) => {
  const iconSrc = IconMapping[type]

  if (!iconSrc) return null

  const sizes = fill
    ? { fill }
    : typeof size === 'undefined'
      ? { width, height }
      : { width: size, height: size }

  return <Image {...imgProps} {...sizes} src={iconSrc} alt={`icon ${type}`} />
}
