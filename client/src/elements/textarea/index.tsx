import { Box, InputLabelProps, InputProps as MInputProps, TextareaAutosize, TextareaAutosizeProps } from '@mui/material'
import { Controller } from 'react-hook-form'
import { ContainerController } from '~/constants/types.type'
import { CustomFormControlLabelProps } from '../custom-form-control-label'
import { InputStyles } from '../custom/input'
import ErrorMessage from '../error-message'
import styles from './textarea.module.scss'

type InputProps = {
  maxLength?: number
  inputLabelProps?: InputLabelProps
  height: number | string
} & MInputProps &
  ContainerController &
  CustomFormControlLabelProps &
  TextareaAutosizeProps &
  InputStyles

const TextArea = ({ control, register, name, maxRows = 5, onKeyDown, ...rest }: InputProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <>
          <TextareaAutosize
            id={name}
            name={name}
            error={!!error}
            maxRows={maxRows}
            value={typeof value === 'object' ? value?.name : value}
            onChange={({ target: { value } }) => onChange(value)}
            inputProps={{
              autoComplete: 'off',
              register: register,
              ...rest.inputProps
            }}
            onKeyDown={(e) => {
              if (onKeyDown) onKeyDown(e)
            }}
            {...rest}
            className={styles['text-area']}
            style={{
              borderColor: error ? '#E01839' : '#e61973'
            }}
          />
          {!!error && (
            <Box textAlign={'left'}>
              <ErrorMessage>{error?.message || ''}</ErrorMessage>
            </Box>
          )}
        </>
      )}
    />
  )
}

export default TextArea
