import Box from '@mui/material/Box'
import CircularProgress, { circularProgressClasses } from '@mui/material/CircularProgress'
import styles from './loading-custom.module.scss'

interface LoadingProps {
  isCentered?: boolean
}

const Loading = ({isCentered = false}: LoadingProps) => {
  return (
    <Box className={styles['wrapper-loading']}>
      {/* <CircularProgress
        variant='determinate'
        sx={{
          color: (theme) => theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
        }}
        size={24}
        thickness={4}
        value={100}
      /> */}
      <CircularProgress
        variant='indeterminate'
        disableShrink
        sx={{
          color: 'inherit',
          animationDuration: '550ms',
          position: 'absolute',
          top: isCentered ? '50%' : 'unset',
          left: isCentered ? '50%' : 0,
          transform: 'translate(-50%, -50%)',
          [`& .${circularProgressClasses.circle}`]: {
            strokeLinecap: 'round',
          },
        }}
        size={24}
        thickness={4}
      />
    </Box>
  )
}

export default Loading
