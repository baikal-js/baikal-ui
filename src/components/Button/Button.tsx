import React, { FC, ReactNode } from 'react'
import s from './Button.module.scss'

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
  const classBtn = s.buiBtn
  // const classVariant = `${s.btn}_${variant}`
  // const classDisabled = `${s.btn}_${size} ${disabled ? `btn-disabled_${variant} btn-disabled` : ''}`

  // const mainClassNames = [classBtn, classVariant, classDisabled]

  return (
    <button className={s.buiBtn} type='button' disabled={disabled} onClick={onClick}>
      {children}
    </button>
  )
}
