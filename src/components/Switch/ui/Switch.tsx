import React, { FC } from 'react'
import './Switch.scss'
import { classNames } from '../../../core/libs'

export interface SwitchProps {
  checked?: boolean
  onChange?: () => void
}

const Switch: FC<SwitchProps> = ({ checked, onChange }) => {
  const classCircle = classNames(
    'bui-switch__circle',
    {
      'bui-switch__circle-checked': checked,
    },
    [],
  )

  const classSwitch = classNames(
    'bui-switch',
    {
      'bui-switch-checked': checked,
    },
    [],
  )


  return (
    <button className={classSwitch} onChange={onChange}>
      <div className='bui-switch__wrapper'>
        <span className={classCircle} />
      </div>
    </button>
  )
}

export default Switch
