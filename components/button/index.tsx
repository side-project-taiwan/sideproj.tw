import { Button as UiButton, type ButtonProps } from '@/components/ui/button'

type Props = Omit<ButtonProps, 'variant'> & {
  variant?: ButtonProps['variant'] | 'native'
  isLoading?: boolean
}

export const Button = ({
  children,
  type = 'button',
  variant = 'default',
  disabled,
  isLoading = false,
  ...props
}: Props) => {
  const isDisabled = disabled || isLoading

  if (variant === 'native') {
    return (
      <button {...props} type={type} disabled={isDisabled}>
        {children}
      </button>
    )
  }

  return (
    <UiButton {...props} type={type} disabled={isDisabled} variant={variant}>
      {children}
    </UiButton>
  )
}
