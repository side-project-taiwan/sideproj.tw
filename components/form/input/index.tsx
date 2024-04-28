import { Input as UiInput, type InputProps } from '@/components/ui/input'
import {
  FormField,
  type FormFieldProps,
  type FieldValues,
} from '@/components/form/form-field'
import { Text } from '@/components/text'
import { cn } from '@/libs/utils'

export type Props<T extends FieldValues = FieldValues> = Omit<
  FormFieldProps<T>,
  'children'
> & { fieldProps?: InputProps }

export const Input = <T extends FieldValues = FieldValues>({
  fieldProps,
  ...formFieldProps
}: Props<T>) => {
  return (
    <FormField {...formFieldProps}>
      {({ field, fieldState }) => {
        switch (fieldProps?.type) {
          case 'file': {
            return (
              <>
                <label
                  htmlFor={field.name}
                  className={cn(
                    'flex items-center gap-x-2 rounded-md border px-3 py-2',
                    fieldState.invalid ? 'border-[#DC2626]' : 'border-zinc-200',
                  )}
                >
                  {!field.value && (
                    <Text tag='span' className='text-sm' color='zinc-900'>
                      選擇檔案
                    </Text>
                  )}
                  <Text tag='span' className='text-sm' color='zinc-400'>
                    {field.value ? field.value : fieldProps.placeholder}
                  </Text>
                </label>
                <UiInput
                  {...fieldProps}
                  {...field}
                  value={field.value || fieldProps.value || ''}
                  id={field.name}
                  className='hidden'
                  aria-hidden
                  hidden
                />
              </>
            )
          }
          default: {
            return <UiInput {...fieldProps} {...field} id={field.name} />
          }
        }
      }}
    </FormField>
  )
}
