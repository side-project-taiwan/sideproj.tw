import type { ComponentProps } from 'react'
import Image from 'next/image'

const IconMapping = {
  logo: '/homepage/side-project.svg',
  'logo-2': '/logo.svg',
  'arrow-left': '/arrow-left.svg',
  psychiatry: 'project-applications/psychiatry.svg',
  sheep: '/cooperations/sheep.svg',
  daodao: '/cooperations/daodao.svg',
  zeabur: '/cooperations/zeabur.svg',
  discord: '/about/discord_icon.svg',
  github: '/about/github_icon.svg',
} as const

export type IconMappingType = keyof typeof IconMapping

type ImageProps = Omit<ComponentProps<typeof Image>, 'src' | 'alt'>

type IconProps = ImageProps & {
  type: IconMappingType
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
