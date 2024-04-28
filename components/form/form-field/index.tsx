import type {
  Control,
  ControllerProps,
  FieldPath,
  FieldValues,
} from 'react-hook-form'
import {
  FormControl,
  FormDescription,
  FormField as UiFormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { cn } from '@/libs/utils'

export { FieldValues, FieldPath }

export type FormFieldProps<T extends FieldValues = FieldValues> = {
  control: Control<T>
  fieldName: FieldPath<T>
  label: string
  children: ControllerProps<T>['render']
  description?: string
}

export const FormField = <T extends FieldValues = FieldValues>({
  control,
  fieldName,
  label,
  description,
  children,
}: FormFieldProps<T>) => {
  return (
    <UiFormField<T>
      control={control}
      name={fieldName}
      render={({ field, fieldState, formState }) => {
        return (
          <FormItem>
            <FormLabel htmlFor={fieldName}>{label}</FormLabel>
            <FormControl
              className={cn(
                fieldState.invalid &&
                  'rounded-md border border-[#DC2626] focus-visible:ring-0',
              )}
            >
              {children({ field, fieldState, formState })}
            </FormControl>
            {description && <FormDescription>{description}</FormDescription>}
            <FormMessage />
          </FormItem>
        )
      }}
    />
  )
}
