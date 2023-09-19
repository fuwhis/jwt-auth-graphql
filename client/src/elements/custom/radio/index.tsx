// Import necessary libraries and components
import { RadioGroupProps as MRadioGroupProps, RadioGroup, RadioProps } from '@mui/material'
import { ListConfig } from '~/constants/types.type'
import CustomFormControlLabel, {
  CustomFormControlLabelProps,
  getFormControlLabelProps
} from '~/elements/custom-form-control-label'
import CustomRadioControl from './custom-radio-control'

// Define the types for the component props, combining several different types
type RadioGroupProps = MRadioGroupProps &
  CustomFormControlLabelProps & {
    radioProps?: RadioProps
    list: any[]
    config?: ListConfig
    disabled?: boolean
  }

// Define the CustomRadioGroup component
const CustomRadioGroup = ({
  sx,
  className,
  radioProps,
  list = [],
  config = new ListConfig(),
  value = '',
  name = '',
  disabled = false,
  ...rest
}: RadioGroupProps) => {
  // Deconstruct the config object
  const { label, value: configValue } = config
  // Get form props and rest props
  const { formProps, rest: restProps } = getFormControlLabelProps(rest)

  // Return the RadioGroup component
  return (
    <CustomFormControlLabel name={name} {...formProps}>
      <RadioGroup className={className} value={value} sx={sx} {...restProps}>
        {list.map((item) => (
          // For each item in the list, create a CustomRadioControl
          <CustomRadioControl
            key={item[configValue]}
            value={item[configValue]}
            radioProps={radioProps}
            itemLabel={item[label]}
            disabled={disabled}
          />
        ))}
      </RadioGroup>
    </CustomFormControlLabel>
  )
}

// Export the component
export default CustomRadioGroup
