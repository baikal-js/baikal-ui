import React, { FC, InputHTMLAttributes } from 'react'
import './Checkbox.scss'
import { classNames } from '../../../core/libs'

export interface ICheckbox {
  formField?: any
  children?: string
  disabled?: boolean
  error?: boolean
}

const Checkbox: FC<ICheckbox & InputHTMLAttributes<HTMLInputElement>> = ({
  formField,
  disabled,
  children,
  className,
  error,
  ...otherProps
}) => {
  const wrapperClassName = classNames('bui-checkbox__input', {}, [className])
  const labelClassName = classNames('bui-checkbox__label', { 'bui-checkbox__error': Boolean(error) })

  return (
    <div className='bui-checkbox'>
      <input id={formField} className={wrapperClassName} type='checkbox' disabled={disabled} {...otherProps} />
      <label className={labelClassName} htmlFor={formField}>
        {children}
      </label>
    </div>
  )
}

export default Checkbox
