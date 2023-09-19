import { Box, Button, PopoverProps, Typography } from '@mui/material';
import Logo from 'assets/logo.svg';
import { ReactNode } from 'react';
import { useForm } from 'react-hook-form';
import { ArrowDownMiniIcon, ArrowUpMiniIcon, LogOutIcon, SettingIcon } from '../../assets/imgs';
import { Input, Popover } from '../../elements';
import { useDialog } from '../../hooks/use-dialog';
import { usePopover } from '../../hooks/use-popover';
import styles from './header.module.scss';

const PopoverButton = ({ icon, children, onClick }: { icon: string; children: ReactNode; onClick?: any }) => (
   <Button className={styles.btn_box} onClick={onClick}>
      <Box className={styles.icon} component={'img'} src={icon} />
      <Typography>{children}</Typography>
   </Button>
)

const defaultValues = {
   keySearch: ''
}

const formOptions = {
   defaultValues,
}

const Header = () => {
   const { anchorEl, popoverId, openPopOver, onClosePopover, open: isOpen } = usePopover(1);

   const { open, onOpenDialog: confirmOpenFn, onCloseDialog: confirmCloseFn } = useDialog()

   const { control, getValues, setValue, reset } = useForm<any>(formOptions)

   return (
      <Box className={styles.header_wrapper}>
         <Box className={styles.header_left} component={'img'} src={Logo} />
         <Box className={styles.header_centre}>
            <Input
               inputSize='lg'
               inputAppearance='ghost'
               name='keySearch'
               control={control}
               maxRows={6}
               placeholder='Tìm kiếm bài viết'
            />
         </Box>

         <Box className={styles.header_right}>
            <Button variant="outlined" id={popoverId} className={styles.menu_btn} onClick={openPopOver}>
               ADMIN
               <Box component={'img'} src={isOpen ? ArrowUpMiniIcon : ArrowDownMiniIcon} />
            </Button>
            <Popover
               id={popoverId}
               open={isOpen}
               onClosePopover={onClosePopover}
               popoverProps={{ anchorEl } as PopoverProps}
            >
               <Box className={styles['popover-content']}>
                  <PopoverButton onClick={confirmOpenFn} icon={LogOutIcon}>
                     Sign Out
                  </PopoverButton>
                  <PopoverButton onClick={() => {
                  }} icon={SettingIcon}>
                     Settings
                  </PopoverButton>
               </Box>
            </Popover>
         </Box>
      </Box >
   )
}

export default Header