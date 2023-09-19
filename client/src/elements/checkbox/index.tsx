// Import required dependencies and components
import { CheckboxProps as MCheckboxProps } from '@mui/material'
import { Controller } from 'react-hook-form'
import { CustomFormControlLabelProps } from '../custom-form-control-label'
import CustomCheckbox, { CustomCheckboxProps } from '../custom/checkbox'

// Define the type for the checkbox props, combining several different types
type CheckboxProps = {
  containerStyles?: string
  name: string
  control?: any | undefined
  subLabel?: string
} & MCheckboxProps &
  CustomFormControlLabelProps &
  CustomCheckboxProps

// Define the Checkbox component
const Checkbox = ({ name, control, ...rest }: CheckboxProps) => {
  // Use react-hook-form's Controller to manage the checkbox state
  return (
    <Controller
      name={name}
      control={control}
      // The render prop is used to control what is rendered, with field.onChange being used to sync the value of the checkbox with react-hook-form
      render={({ field: { onChange, value } }) => {
        return (
          <CustomCheckbox name={name} {...rest} />
        )
      }}
    />
  )
}

export default Checkbox
