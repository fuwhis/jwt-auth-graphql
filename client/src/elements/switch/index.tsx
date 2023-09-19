import { Switch as MSwitch, SwitchProps as MSwitchProps, styled } from '@mui/material'
import { ChangeEvent, useState } from 'react'

type SwitchProps = MSwitchProps & {
  isChecked: boolean
  toggleChecked: (val: boolean) => void
}

const IOSSwitch = styled((props: MSwitchProps) => (
  <MSwitch focusVisibleClassName='.Mui-focusVisible' disableRipple {...props} />
))(({theme}) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        background: theme.palette.mode === 'dark' ? '#2ECA45' : 'linear-gradient(to right, #00c7be, #3182f7);',
        opacity: 1,
        border: 0,
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#33cf4d',
      border: '6px solid #fff',
    },
    '&.Mui-disabled .MuiSwitch-thumb': {
      color: theme.palette.mode === 'light' ? theme.palette.grey[100] : theme.palette.grey[600],
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: theme.palette.mode === 'light' ? 0.7 : 0.3,
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    // background: theme.palette.mode === 'light' ? '#E9E9EA' : '#39393D',
    opacity: 0.5,
    transition: theme.transitions.create(['background'], {
      duration: 500,
    }),
  },
}))

const Switch = ({isChecked = false, toggleChecked}: SwitchProps) => {
  const [checked, setChecked] = useState<boolean>(isChecked)

  const handleToggleChecked = (event: ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked)
    toggleChecked(event.target.checked)
  }

  return <IOSSwitch checked={checked} onChange={handleToggleChecked} />
}

export default Switch
