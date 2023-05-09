import React, { FC, HTMLAttributes } from 'react'
import { classNames } from '../../../core/libs'
import './Button.scss'

export interface ButtonProps {
  children: string
  variant?: 'primary' | 'filled' | 'bordered' | 'pured'
  disabled?: boolean
  onClick?: () => void | Event
  icon?: JSX.Element
  className?: string
}

const Button: FC<HTMLAttributes<HTMLButtonElement> & ButtonProps> = ({
  children,
  disabled,
  onClick,
  variant,
  className,
  icon,
  ...otherProps
}) => {
  const classBtn = classNames(
    'bui-btn',
    {
      'bui-btn-disabled': disabled && !variant,
      'bui-btn-icon': Boolean(icon) && !variant,
      'bui-btn-icon-disabled': disabled && Boolean(icon) && !variant,
      [`bui-btn-${variant} bui-btn-${variant}-icon`]: variant,
      [`bui-btn-${variant}-disabled`]: variant && disabled,
    },
    [className],
  )

  return (
    <button className={classBtn} type='button' disabled={disabled} onClick={onClick} {...otherProps}>
      {icon}
      {children}
    </button>
  )
}

export default Button
