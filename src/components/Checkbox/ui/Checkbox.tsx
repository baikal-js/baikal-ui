import React, { FC } from 'react'
import './Checkbox.scss'

export interface ICheckbox {
  label?: string
  name?: string
  checked?: boolean
}

const Checkbox: FC<ICheckbox> = ({ label, name, checked }) => {
  return (
    <div className='bui-checkbox'>
      {label ? <label className='bui-checkbox__label' htmlFor={name} /> : null}
      <input className='bui-checkbox__input' type='checkbox' checked={checked} />
      <label className='bui-checkbox__label' htmlFor={name} />
    </div>
  )
}

export default Checkbox
