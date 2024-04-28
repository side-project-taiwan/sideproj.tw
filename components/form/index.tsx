import type { UseFormReturn, FieldValues } from 'react-hook-form'
import type {
  DetailedHTMLProps,
  FormHTMLAttributes,
  PropsWithChildren,
} from 'react'
import { Form as UiForm } from '@/components/ui/form'

type Props<T extends FieldValues = FieldValues> = PropsWithChildren<
  DetailedHTMLProps<FormHTMLAttributes<HTMLFormElement>, HTMLFormElement> & {
    formContorl: UseFormReturn<T>
  }
>

export const Form = <T extends FieldValues = FieldValues>({
  formContorl,
  children,
  ...formProps
}: Props<T>) => {
  if (!children) return null

  return (
    <UiForm {...formContorl}>
      <form {...formProps}>{children}</form>
    </UiForm>
  )
}
