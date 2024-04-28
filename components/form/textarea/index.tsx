import {
  Textarea as UiTextarea,
  type TextareaProps,
} from '@/components/ui/textarea'
import {
  FormField,
  type FormFieldProps,
  type FieldValues,
} from '@/components/form/form-field'

export type Props<T extends FieldValues = FieldValues> = Omit<
  FormFieldProps<T>,
  'children'
> & { fieldProps?: TextareaProps }

export const Textarea = <T extends FieldValues = FieldValues>({
  fieldProps,
  ...formFieldProps
}: Props<T>) => {
  return (
    <FormField {...formFieldProps}>
      {({ field }) => <UiTextarea {...fieldProps} {...field} id={field.name} />}
    </FormField>
  )
}
