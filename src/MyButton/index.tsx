import React from 'react'

interface IMyButton {
  children: any
  color: string
}

const MyButton: React.FC<IMyButton> = ({ children, color }) => {
  return (
    <button color={color}>
      {children}
    </button>
  )
}

export default MyButton