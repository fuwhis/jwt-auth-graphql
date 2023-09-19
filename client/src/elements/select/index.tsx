import { SelectProps as MSelectProps } from '@mui/material'
import { Controller } from 'react-hook-form'
import { ContainerController, ListConfig } from '~/constants/types.type'
import { CustomFormControlLabelProps } from '../custom-form-control-label'
import { InputStyles } from '../custom/input'
import CustomSelect, { SelectCate } from '../custom/select'

type SelectProps = {
  name: string
  list: any
  config?: ListConfig
  cate?: SelectCate
} & MSelectProps &
  ContainerController &
  CustomFormControlLabelProps &
  InputStyles

const Select = ({
  name,
  control,
  containerStyle = '',
  list,
  config = new ListConfig(),
  containerSx,
  inputLabelProps,
  ...rest
}: SelectProps) => {
  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, value }, fieldState: { error: _error } }) => {
        return (
          <CustomSelect
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
      }}
    />
  )
}

export default Select
