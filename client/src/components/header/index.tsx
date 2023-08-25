import logo from '@/assets/logo.svg'
import { Box, Button, Typography } from '@mui/material'
import { ReactNode } from 'react'
import styles from './header.module.scss'

const PopoverButton = ({ icon, children, onClick }: { icon: string; children?: ReactNode; onClick?: any }) => (
    <Button className={styles.btn_box} onClick={onClick}>
        <Box className={styles.icon} component={'img'} src={icon} />
        <Typography>{children}</Typography>
    </Button>
)

const Header = () => {

    return (
        <Box component={'header'} className={styles.header}>
            <PopoverButton icon={logo}>Logout</PopoverButton>
        </Box>
    )
}

export default Header