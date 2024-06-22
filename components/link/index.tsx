import NextLink from 'next/link'
import { cn } from '@/libs/utils'

type Props = React.ComponentProps<typeof NextLink>

export const Link = ({ className, ...props }: Props) => {
  return <NextLink {...props} className={cn('no-underline', className)} />
}
