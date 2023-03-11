import React, { FC, ReactNode } from 'react'
import './Button.scss'

export interface ButtonProps {
  children: ReactNode
  variant?: 'default' | 'bordered' | 'filled'
  size?: 'small' | 'middle' | 'large'
  disabled?: boolean
  onClick?: () => void | Event
}

export const Button: FC<ButtonProps> = ({
  children,
  variant = 'default',
  size = 'middle',
  disabled = false,
  onClick,
}) => {
  const classBtn = 'bui-btn'
  const classVariant = `bui-btn-variant_${variant}`
  const classDisabled = `bui-btn-size_${size} ${disabled ? `bui-btn-disabled_${variant} bui-btn-disabled` : ''}`

  const mainClassNames = [classBtn, classVariant, classDisabled]

  return (
    <button className={mainClassNames.join(' ')} type='button' disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
