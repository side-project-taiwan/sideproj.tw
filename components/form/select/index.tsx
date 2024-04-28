import { TAILWIND_CONFIG } from 'tailwind.config'
import {
  FormField,
  type FormFieldProps,
  type FieldValues,
} from '@/components/form/form-field'
import ReactSelect, { type Props as ReactSelectProps } from 'react-select'
import animatedComponents from 'react-select/animated'
import { useId } from 'react'
import { cn } from '@/libs/utils'

export type SelectProps<T extends FieldValues = FieldValues> = Omit<
  FormFieldProps<T>,
  'children'
> & { fieldProps: ReactSelectProps }

const customComponents: ReactSelectProps['components'] = {
  ...animatedComponents(),
  IndicatorSeparator: undefined,
}

const customClassNames: ReactSelectProps['classNames'] = {
  control: state => {
    return cn(
      state.isFocused &&
        !state.selectProps['aria-invalid'] &&
        'ring-offset-background transition-colors outline-none ring-2 ring-ring ring-offset-2',
    )
  },
}

const customStyles: ReactSelectProps['styles'] = {
  control: styles => {
    return {
      ...styles,
      backgroundColor: TAILWIND_CONFIG.theme.colors.white,
      borderRadius: TAILWIND_CONFIG.theme.borderRadius.md,
      borderColor: TAILWIND_CONFIG.theme.colors.input,
      boxShadow: undefined,
    }
  },
  multiValue: styles => {
    return {
      ...styles,
      borderRadius: TAILWIND_CONFIG.theme.borderRadius.sm,
      color: TAILWIND_CONFIG.theme.colors['zinc-500'],
      backgroundColor: TAILWIND_CONFIG.theme.colors['zinc-200'],
    }
  },
  placeholder: styles => {
    return {
      ...styles,
      color: TAILWIND_CONFIG.theme.colors['zinc-400'],
    }
  },
  indicatorsContainer: styles => {
    return {
      ...styles,
      color: TAILWIND_CONFIG.theme.colors['zinc-400'],
    }
  },
}

export const Select = <T extends FieldValues = FieldValues>({
  fieldProps,
  ...formFieldProps
}: SelectProps<T>) => {
  const instanceId = useId()
  return (
    <FormField {...formFieldProps}>
      {({ field, fieldState }) => {
        return (
          <ReactSelect
            {...fieldProps}
            {...field}
            components={customComponents}
            styles={customStyles}
            classNames={customClassNames}
            instanceId={instanceId}
            aria-invalid={fieldState.invalid}
          />
        )
      }}
    </FormField>
  )
}
