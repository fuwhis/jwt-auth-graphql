// Import required dependencies and components
import { Checkbox, FormControlLabel, CheckboxProps as MCheckboxProps, Typography } from '@mui/material'
import { useState } from 'react'
import { CheckboxCheckedIcon, CheckboxIndeterminateIcon, CheckboxUncheckIcon } from '~/assets/icons'
import CustomFormControlLabel, {
  CustomFormControlLabelProps,
  getFormControlLabelProps
} from '~/elements/custom-form-control-label'

// Define types for the shape of the checkbox and the states it can have
type CheckboxShape = 'checked' | 'indeterminate'

// Define type for custom checkbox props
export type CustomCheckboxProps = {
  shape?: CheckboxShape
  subLabel?: string
}

// Define overall checkbox props type
type CheckboxProps = MCheckboxProps & CustomFormControlLabelProps & CustomCheckboxProps

// Define the custom checkbox component
const CustomCheckbox = ({ className, disabled, name, subLabel, shape = 'checked', ...rest }: CheckboxProps) => {
  // Use getFormControlLabelProps to destructure formProps and restProps
  const { formProps, rest: restProps } = getFormControlLabelProps(rest)

  // Define state variables for checkbox interaction
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  // Define handlers for mouse and focus events
  const handleMouseOver = () => setHovered(true)
  const handleMouseOut = () => setHovered(false)
  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)

  // Define function to get the correct checkbox shape icon
  const getShape = (shape: CheckboxShape) => {
    switch (shape) {
      case 'checked':
        return CheckboxCheckedIcon
      case 'indeterminate':
        return CheckboxIndeterminateIcon
    }
  }

  // Call the getShape function with the current shape
  const Shape = getShape(shape)

  // Determine the current state class of the checkbox
  const stateClass = focused ? 'focused' : hovered ? 'hover' : disabled ? 'disabled' : 'normal'
  // Return the custom checkbox component
  return (
    <CustomFormControlLabel {...formProps} name={name}>
      <FormControlLabel
        control={
          <Checkbox
            name={name}
            onMouseOver={handleMouseOver}
            onMouseOut={handleMouseOut}
            onFocus={handleFocus}
            onBlur={handleBlur}
            disabled={disabled}
            icon={<CheckboxUncheckIcon state={stateClass} />}
            checkedIcon={<Shape state={stateClass} />}
            className={`${className}`}
            {...restProps}
          />
        }
        label={<Typography className={`${className}`}>{subLabel}</Typography>}
      />
    </CustomFormControlLabel>
  )
}

export default CustomCheckbox
