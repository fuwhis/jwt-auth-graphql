import { Button as MaterialButton, ButtonProps as MaterialButtonProps } from '@mui/material'
import React from 'react'
import Loading from '../loading'
import buttonStyles from './button.module.scss'

// Define types for button properties
export type ButtonColor = 'primary' | 'gradient'
export type ButtonSize = 'md' | 'lg' | 'sm' | undefined
export type ButtonAppearance = 'solid' | 'light-solid' | 'outline' | 'light-outline' | 'ghost' | 'hyperlink'
export type ButtonType = 'normal' | 'on-table'

// Extend MaterialButtonProps to include custom button properties
type CustomButtonProps = {
  children?: React.ReactNode
  isLoading?: boolean
  form?: string
  fullWidth?: boolean
  buttonSize?: ButtonSize
  appearance?: ButtonAppearance
  buttonColor?: ButtonColor
  buttonType?: ButtonType
} & MaterialButtonProps

// Button Component
const Button = ({
  children,
  isLoading = false,
  className = '',
  appearance = 'solid',
  buttonColor = 'primary',
  buttonSize = 'lg',
  fullWidth = false,
  buttonType = 'normal',
  sx = {},
  ...remainingProps
}: CustomButtonProps) => {
  // Custom styling for the button
  const customStyling = {
    width: fullWidth ? '100%' : 'fit-content',
    ...sx,
  }

  // Generate dynamic classes for the button
  const dynamicClasses = `${buttonStyles.custom_btn} ${buttonStyles[`size_${buttonSize}`]} ${buttonStyles[`variant_${buttonColor}_${appearance}`]} ${className} ${buttonStyles[`type_${buttonType}`]}`

  // Render the button with a loading spinner or children based on isLoading prop
  return (
    <MaterialButton sx={customStyling} className={dynamicClasses} {...remainingProps}>
      {isLoading ? <Loading /> : children}
    </MaterialButton>
  )
}

export default Button
