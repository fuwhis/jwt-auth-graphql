import { Box, ListItemIcon, MenuItem, Select, SelectProps } from '@mui/material'
import { useState } from 'react'
import { SelectCheckIcon, SelectDownIcon, SelectUpIcon } from '~/assets/icons'
import { ListConfig } from '~/constants/types.type'
import CustomFormControlLabel, {
  CustomFormControlLabelProps,
  getFormControlLabelProps,
} from '~/elements/custom-form-control-label'
import { InputAppearance, InputStyles } from '../input'
import styles from './customSelect.module.scss'

export type SelectCate = 'default'

type CustomSelectProps = InputStyles &
  SelectProps &
  CustomFormControlLabelProps & {
    list: any[]
    config?: ListConfig
    defaultLabel?: string
    cate?: SelectCate
  }

const SelectIconComponent = (props: { className: string }) => {
  const { className = '' } = props
  const isOpen = className.includes('MuiSelect-iconOpen')
  return (
    <Box pr={1} pt={0.5} {...props}>
      {isOpen ? <SelectUpIcon /> : <SelectDownIcon />}
    </Box>
  )
}

const menuProps = {
  sx: {
    boxShadow: '0 8px 20px -5px #d9d9d9',
    li: {
      justifyContent: 'space-between',
      backgroundColor: '#ffffff !important',
      mr: 1,
      ml: 1,
      p: 1.5,
      borderRadius: '6px',
      '&.Mui-selected': {
        backgroundColor: '#F5F6F7 !important',
      },
      '& .MuiListItemIcon-root': {
        justifyContent: 'flex-end',
      },
    },
  },
}

const CustomSelect = ({
  sx,
  className,
  list = [],
  config = new ListConfig(),
  value,
  renderValue,
  variant,
  defaultLabel = '',
  cate = 'default',
  name,
  inputSize = 'md',
  inputAppearance = 'solid',
  ...rest
}: CustomSelectProps) => {
  const [open, setOpen] = useState(false)
  const { label, value: configValue, disabled: disabledValue } = config

  const defaultRenderValue = (selected: any) => {
    if (!selected && defaultLabel) return defaultLabel
    return list.find((item) => item[configValue] === selected)?.[label]
  }

  const { formProps, rest: restProps } = getFormControlLabelProps(rest)

  const dynamicClasses = `${styles.custom_select} ${styles[`size_${inputSize}`]} ${styles[`variant_${inputAppearance}`]
    } ${className}`

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
    <CustomFormControlLabel name={name} {...formProps}>
      <Select
        onOpen={() => setOpen(true)}
        onClose={() => setOpen(false)}
        className={dynamicClasses}
        variant={variant}
        displayEmpty
        sx={{
          '&.MuiInputBase-root.MuiOutlinedInput-root': {
            paddingLeft: '12px',
            paddingRight: '30px',
          },
          ...getInputEffect(inputAppearance),
          ...sx,
        }}
        MenuProps={menuProps}
        // IconComponent={(props) => <SelectIconComponent {...props} />}
        renderValue={renderValue || defaultRenderValue}
        value={value}
        defaultValue={''}
        {...restProps}
      >
        {list.map((item, index) => (
          <MenuItem key={index} value={item[configValue]} disabled={item[disabledValue]}>
            {item[label]}
            <ListItemIcon>{item[configValue] === value && <SelectCheckIcon />}</ListItemIcon>
          </MenuItem>
        ))}
      </Select>
    </CustomFormControlLabel>
  )
}

export default CustomSelect
