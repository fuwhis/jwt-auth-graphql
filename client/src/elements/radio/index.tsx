// Import necessary libraries and components
import { RadioProps as ARadioProps, RadioGroupProps } from '@mui/material'
import { Controller } from 'react-hook-form'
import { ContainerController, ListConfig } from '~/constants/types.type'
import { CustomFormControlLabelProps } from '../custom-form-control-label'
import CustomRadioGroup from '../custom/radio'

// Define the types for the component props
type RadioProps = {
  name: string
  list: any
  config?: ListConfig
  radioProps?: ARadioProps
  disabled?: boolean
} & RadioGroupProps &
  ContainerController &
  CustomFormControlLabelProps

// Define the Radio component
const Radio = ({ name, control, list, config = new ListConfig(), ...rest }: RadioProps) => {
  // Return the Controller component from react-hook-form
  return (
    <Controller
      name={name}
      control={control}
      render={
        ({ field: { onChange, value } }) => {
          return (
            <CustomRadioGroup
              id={name}
              name={name}
              onChange={({ target: { value } }) => {
                onChange(value)
              }}
              value={value}
              list={list}
              config={config}
              {...rest}
            />
          )
        }
        // Pass down the onChange and value props to CustomRadioGroup
      }
    />
  )
}

// Export the component
export default Radio
