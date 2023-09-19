import Box from '@mui/material/Box'
import Snackbar, { SnackbarProps as MSnackbarProps, SnackbarOrigin } from '@mui/material/Snackbar'
import Typography from '@mui/material/Typography'
import { Dispatch, useEffect, useState } from 'react'
import { CheckCircleIcon, InformationIcon } from '~/assets/icons'
import styles from './snacknar.module.scss'

interface State extends SnackbarOrigin {
  open: boolean
}

type SnackbarProps = MSnackbarProps & {
  isOpen: boolean
  cate: 'error' | 'success' | 'warning'
  message: string
  setOpen?: Dispatch<boolean>
  duration?: number
}

const SnackBar = ({ isOpen = false, cate, message, setOpen, duration, ...rest }: SnackbarProps) => {
  const [state, setState] = useState<State>({
    open: isOpen,
    vertical: 'top',
    horizontal: 'center'
  })
  const { vertical, horizontal, open } = state

  const handleClose = () => {
    setState({ ...state, open: false })
    setOpen?.(false)
  }

  useEffect(() => {
    setState({ ...state, open: isOpen })
  }, [isOpen])

  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={open}
      onClose={handleClose}
      key={vertical + horizontal}
      autoHideDuration={duration}
      {...rest}
    >
      <Box className={styles['snackbar']} sx={{ backgroundColor: cate === 'error' ? '#E01839' : '#12B76A' }}>
        {cate === 'error' ? <InformationIcon /> : <CheckCircleIcon />}
        <Typography component='span'>{message}</Typography>
      </Box>
    </Snackbar>
  )
}

export default SnackBar