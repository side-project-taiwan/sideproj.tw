import { cn } from '@/libs/utils'
import { Icon } from '@/components/icon'
import { Button } from '@/components/button'

type Props = {
  direction: 'previous' | 'next'
  absoluteArrow: boolean
  onClick: () => void
  disabled: boolean
}

export const SPTArrow = ({
  direction,
  absoluteArrow,
  disabled,
  onClick,
}: Props) => {
  const type = direction === 'previous' ? 'arrow-left' : 'arrow-right'

  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      className={cn(
        'h-9 w-9 cursor-pointer rounded-full bg-blue-500 p-0',
        'z-10 flex flex-shrink-0 items-center justify-center',
        absoluteArrow
          ? [
              'absolute top-1/2 -translate-y-1/2',
              direction === 'previous'
                ? 'left-[calc(((100%-800px)/2)-36px-16px)]'
                : 'right-[calc(((100%-800px)/2)-36px-16px)]',
            ]
          : ['relative', direction === 'previous' ? 'left-4' : 'right-4'],
      )}
    >
      <Icon type={type} size={16} />
    </Button>
  )
}
