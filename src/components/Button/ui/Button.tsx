import React, { FC, HTMLAttributes, useEffect, useState } from 'react'
import { classNames } from 'core/libs'
import './Button.scss'

export interface ButtonProps {
  children: string
  variant?: 'primary' | 'filled' | 'pured'
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
  const [animate, setAnimate] = useState<boolean>(false)

  const classBtn = classNames(
    'bui-btn',
    {
      'bui-btn-animate': animate,
      'bui-btn-disabled': disabled && !variant,
      'bui-btn-icon': Boolean(icon) && !variant,
      'bui-btn-icon-disabled': disabled && Boolean(icon) && !variant,
      [`bui-btn-${variant} bui-btn-${variant}-icon`]: variant,
      [`bui-btn-${variant}-disabled`]: variant && disabled,
    },
    [className],
  )

  useEffect(() => {
    const timeout = setTimeout(() => {
      setAnimate(false)
    }, 300)
    return () => clearTimeout(timeout)
  }, [animate])

  const onClickHandler = () => {
    setAnimate(true)
    onClick()
  }

  return (
    <button className={classBtn} onClick={onClickHandler} type='button' disabled={disabled} {...otherProps}>
      {children}
      {icon}
    </button>
  )
}

export default Button
