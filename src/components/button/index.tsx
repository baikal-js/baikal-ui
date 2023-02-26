import React, {ReactNode} from 'react'
import './styles/button.scss'

export interface IButtonProps {
  children: ReactNode
  variant?: 'primary' | 'success'
  onClick?: () => void
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<IButtonProps> = ({children, variant='primary', onClick, type='button'}) => {
  const className = `bui-btn bui-btn-${variant}`

  return(
    <button className={className} onClick={onClick} type={type}>
      {children}
    </button>
  )
}

export default Button