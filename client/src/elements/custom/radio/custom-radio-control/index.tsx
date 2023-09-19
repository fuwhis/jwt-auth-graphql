// Import necessary libraries and components
import { FormControlLabel, Radio, RadioProps } from '@mui/material'
import { useState } from 'react'
import { RadioUnselectIcon } from '~/assets/icons'
import RadioSelected from '~/assets/icons/radio-selected'
import { Typography } from '~/elements'

// Define the types for the component props
export type CustomRadioControlProps = {
  value: any
  radioProps?: RadioProps
  itemLabel: string
  disabled?: boolean
}

// Define the CustomRadioControl component
const CustomRadioControl = ({ value, radioProps, itemLabel, disabled }: CustomRadioControlProps) => {
  // Define state variables for radio button interaction
  const [hovered, setHovered] = useState(false)
  const [focused, setFocused] = useState(false)

  // Define handlers for mouse and focus events
  const handleMouseOver = () => setHovered(true)
  const handleMouseOut = () => setHovered(false)
  const handleFocus = () => setFocused(true)
  const handleBlur = () => setFocused(false)

  // Determine the current state class of the radio button
  const stateClass = focused ? 'focused' : hovered ? 'hover' : disabled ? 'disabled' : 'normal'

  // Return the FormControlLabel component
  return (
    <FormControlLabel
      key={value}
      value={value}
      control={
        <Radio
          disabled={disabled}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          onFocus={handleFocus}
          onBlur={handleBlur}
          icon={<RadioUnselectIcon state={stateClass} />}
          checkedIcon={<RadioSelected state={stateClass} />}
          {...radioProps}
        />
      }
      label={
        <Typography size='md' lineHeight={'20px'} cate='text_sm_regular' color='solid_neutral.700'>
          {itemLabel}
        </Typography>
      }
    />
  )
}

// Export the component
export default CustomRadioControl
