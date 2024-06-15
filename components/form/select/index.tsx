import {
  FormField,
  type FormFieldProps,
  type FieldValues,
} from '@/components/form/form-field'
import ReactSelect, { type Props as ReactSelectProps } from 'react-select'
import animatedComponents from 'react-select/animated'
import { useId } from 'react'
import { cn } from '@/libs/utils'
import { COLOR, BORDER_RADIUS } from '@/styles/tailwind'

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
      backgroundColor: COLOR.white,
      borderRadius: BORDER_RADIUS.md,
      borderColor: COLOR.input,
      boxShadow: undefined,
    }
  },
  multiValue: styles => {
    return {
      ...styles,
      borderRadius: BORDER_RADIUS.sm,
      color: COLOR['zinc-500'],
      backgroundColor: COLOR['zinc-200'],
    }
  },
  placeholder: styles => {
    return {
      ...styles,
      color: COLOR['zinc-400'],
    }
  },
  indicatorsContainer: styles => {
    return {
      ...styles,
      color: COLOR['zinc-400'],
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
