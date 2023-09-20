import { Box, IconButton, InputAdornment, InputProps as MInputProps, OutlinedInput } from '@mui/material'
import { useState } from 'react'
import { PwVisibilityOff, PwVisibilityOn } from '~/assets/imgs'
import CustomFormControlLabel, {
  CustomFormControlLabelProps,
  getFormControlLabelProps,
} from '~/elements/custom-form-control-label'
import styles from './customInput.module.scss'

export type InputSize = 'sm' | 'md' | 'lg'
export type InputAppearance = 'solid' | 'ghost'
export type InputStyles = {
  inputSize?: InputSize
  inputAppearance?: InputAppearance
}

type InputProps = MInputProps &
  CustomFormControlLabelProps & {
    register?: any
    error?: boolean
  } & InputStyles

const phoneNumberReplaceRegex = /[(a-zA-Z)(?=.*!@#$%^&*()+_/;:"'/?>.,<[{}\])ươƯƠ]/g

const CustomInput = ({
  inputSize = 'lg',
  inputAppearance = 'solid',
  sx,
  error,
  disabled,
  register,
  type,
  id,
  className,
  endAdornment,
  ...rest
}: InputProps) => {
  const { formProps, rest: restProps } = getFormControlLabelProps(rest)

  const registerObj = register
    ? register(id, {
      setValueAs: (v: any) => validate(v),
    })
    : {}

  const validate = (v: string) => {
    if (type === 'tel' || type === 'onlyNumber') {
      return v.replace(phoneNumberReplaceRegex, '')
    }
    return v
  }

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword((prev: boolean) => !prev)
  }

  const EndAdornmentPassword = () => (
    <InputAdornment className={styles.visibility} position='end'>
      <IconButton
        className={styles.visibility_btn}
        aria-label='toggle password visibility'
        onClick={handleClickShowPassword}
      >
        <Box component={'img'} src={showPassword ? PwVisibilityOn : PwVisibilityOff} />
      </IconButton>
    </InputAdornment>
  )

  const getType = (type: string | undefined) => {
    if (type === 'password') {
      return showPassword ? 'text' : 'password'
    }
    return type || 'text'
  }

  const dynamicClasses = `${styles.custom_input} ${styles[`size_${inputSize}`]} ${styles[`variant_${inputAppearance}`]} ${className}`

  const getInputEffect = (appearance: InputAppearance) => {
    switch (appearance) {
      case 'solid':
        return {
          '&.Mui-focused': {
            border: '1px solid #2d68fe',
            background: '#fff',
            boxShadow: '0px 0px 0px 2px rgba(45, 104, 254, 0.2)',
          },
          '&.Mui-disabled': {
            border: '1px solid #f1f2f3 !important',
            background: '#f1f2f3 !important',
          },
        }
      case 'ghost':
        return {
          '&.Mui-focused': {
            border: '1px solid #2d68fe',
            background: '#fff',
            boxShadow: '0px 0px 0px 2px rgba(45, 104, 254, 0.2)',
          },
          '&.Mui-disabled': {
            border: '1px solid #f1f2f3 !important',
            background: '#f1f2f3 !important',
          },
        }
    }
  }

  return (
    <CustomFormControlLabel name={id || ''} {...formProps}>
      <OutlinedInput
        className={dynamicClasses}
        disabled={disabled}
        id={id}
        type={getType(type)}
        endAdornment={type === 'password' ? <EndAdornmentPassword /> : endAdornment || undefined}
        sx={{
          ...getInputEffect(inputAppearance),
          borderColor: error ? '#2d68fe !important' : 'inherit',
          boxShadow: error ? 'none !important' : 'inherit',
          height: rest.multiline ? 'auto' : 'inherit',
          '&.MuiInputBase-root.MuiOutlinedInput-root': {
            padding: '0 16px',
          },
          ...sx,
        }}
        {...restProps}
        {...registerObj}
      />
    </CustomFormControlLabel>
  )
}

export default CustomInput
