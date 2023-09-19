import { Box } from '@mui/material'
import { ExclamationMark } from '~/assets/imgs'
import Typography from '../typography'
import styles from './error-message.module.scss'

type ErrorMessageProps = {
  children: string
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return (
    <Box className={styles.err_msg}>
      <Box component={'img'} src={ExclamationMark} alt='exclamation_mark' />
      <Typography color='solid_error.700' mt={0.3} cate='text_xs_regular'>
        {`${' '} ${children}`}
      </Typography>
    </Box>
  )
}

export default ErrorMessage
