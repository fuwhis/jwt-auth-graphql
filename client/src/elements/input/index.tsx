import { Box, InputLabelProps, InputProps as MInputProps } from '@mui/material'
import { Controller } from 'react-hook-form'
import { ContainerController } from '~/constants/types.type'
import { CustomFormControlLabelProps } from '../custom-form-control-label'
import CustomInput, { InputStyles } from '../custom/input'
import ErrorMessage from '../error-message'

type InputProps = {
  disableErrorMode?: boolean
  maxLength?: number
  inputLabelProps?: InputLabelProps
} & MInputProps &
  ContainerController &
  CustomFormControlLabelProps &
  InputStyles

const Input = ({ control, register, name, maxLength = 256, disableErrorMode = false, type, onKeyDown, ...rest }: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <Box sx={{ width: '100%' }}>
          <CustomInput
            id={name}
            name={name}
            error={!!error}
            value={typeof value === 'object' ? value?.name : value}
            onChange={({ target: { value } }) => onChange(value)}
            register={register}
            inputProps={{
              autoComplete: 'one-time-code',
              maxLength: type === 'tel' ? 13 : maxLength,
              ...rest.inputProps,
            }}
            type={type}
            onKeyDown={(e) => {
              if (onKeyDown) onKeyDown(e)
            }}
            {...rest}
          />
          {!!error && !disableErrorMode && (
            <Box textAlign={'left'}>
              <ErrorMessage>{error?.message || ''}</ErrorMessage>
            </Box>
          )}
        </Box>
      )}
    />
  )
}

export default Input
