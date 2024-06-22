import { useMemo, type PropsWithChildren } from 'react'
import {
  getTextTag,
  type TextTagType,
  type TextTagHTMLAttributeType,
} from './get-text-tag'
import { type TextVariantType } from './get-text-variant'
import { COLOR } from '@/styles/tailwind'
import { cn } from '@/libs/utils'

type Props = PropsWithChildren<
  {
    /*
     * TODO: Add text variants with different styles according to the design system with UI
     * TODO: Variant is required after the design system is implemented
     */
    varaint?: TextVariantType
    color?: keyof typeof COLOR
    tag?: TextTagType
  } & TextTagHTMLAttributeType
>
export const Text = ({
  tag = 'span',
  varaint: _,
  children,
  color = 'zinc-500',
  className,
  ...tagProps
}: Props) => {
  const TagName = useMemo(() => getTextTag(tag), [tag])

  return (
    <TagName
      {...tagProps}
      className={cn(color ? `text-${color}` : 'text-inherit', className)}
    >
      {children}
    </TagName>
  )
}
