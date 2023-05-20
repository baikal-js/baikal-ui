import React, { FC, HTMLAttributes, ReactNode } from 'react'
import './BorderZone.scss'

export interface IBorderZone {
  children: ReactNode
}

const BorderZone: FC<HTMLAttributes<HTMLDivElement> & IBorderZone> = ({ children, ...otherProps }) => {
  return (
    <div className='bui-borderZone' {...otherProps}>
      {children}
    </div>
  )
}

export default BorderZone
