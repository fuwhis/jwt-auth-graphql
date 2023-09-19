import { FormControl, InputLabel, InputLabelProps, SxProps, Theme } from '@mui/material'
import { ReactNode } from 'react'
import Typography from '../typography'
import styles from './custom-form-control-label.module.scss'

export type CustomFormControlLabelProps = {
  name: string
  inputLabelProps?: InputLabelProps
  children?: ReactNode
  containerSx?: SxProps<Theme>
  containerStyle?: string
  label?: string
  required?: boolean
  fullWidth?: boolean
}

export const getFormControlLabelProps = <T extends Omit<CustomFormControlLabelProps, 'name'>>(props: T) => {
  const { inputLabelProps, containerSx, containerStyle, label, required, fullWidth, ...rest } = props
  return { formProps: { inputLabelProps, containerSx, containerStyle, label, required, fullWidth }, rest }
}

const CustomFormControlLabel = ({
  label = '',
  containerStyle,
  name,
  inputLabelProps,
  containerSx,
  required = false,
  children,
  fullWidth = true,
}: CustomFormControlLabelProps) => {
  return (
    <FormControl
      variant='outlined'
      sx={{ ...containerSx, width: fullWidth ? '100%' : 'auto' }}
      className={`${styles.form_control} ${containerStyle}`}
    >
      {!!label && (
        <InputLabel
          sx={{ textAlign: 'left' }}
          shrink={true}
          htmlFor={name}
          className={styles.input_label}
          {...inputLabelProps}
        >
          <Typography cate='text_sm_regular' color='solid_neutral.400' lineHeight={'20px'}>
            {label}
            {required && (
              <Typography component={'span'} color='solid_error.700' cate='text_xs_regular'>{` *`}</Typography>
            )}
          </Typography>
        </InputLabel>
      )}
      {children}
    </FormControl>
  )
}

export default CustomFormControlLabel
