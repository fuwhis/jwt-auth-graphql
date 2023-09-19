import { ButtonProps as MButtonProps, IconButton as MIconButton } from '@mui/material'
import React from 'react'
import styles from './button.module.scss'

export type IconButtonCate = 'default'

type IconButtonProps = {
  children?: React.ReactNode
  cate?: IconButtonCate
} & MButtonProps

const Button = ({ children, className = '', cate = 'default', ...rest }: IconButtonProps) => {
  return (
    <MIconButton className={`${styles.custom_icon_btn} ${styles[`custom_icon_btn_${cate}`]} ${className}`} {...rest}>
      {children}
    </MIconButton>
  )
}

export default Button
