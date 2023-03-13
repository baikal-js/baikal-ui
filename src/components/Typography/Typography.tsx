import React, { CSSProperties, FC, ReactNode } from 'react'
import './Typography.scss'
import DOMPurify from 'dompurify'

export interface TypographyProps {
  children: ReactNode
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  sx?: CSSProperties | undefined
}

export const Typography: FC<TypographyProps> = ({ children, variant = 'p', sx }) => {
  const classTypography = 'bui-typography '
  const classVariant = `bui-typography_${variant} `
  const styleSx = JSON.stringify(sx)?.replace(/["'{}]/g, '')
  const mainClassNames = [classTypography, classVariant]

  const textGeneration = `<${variant} style='${styleSx}'
    class='${mainClassNames.join(' ')}'>${children}</${variant}>`

  return <span className='typography' dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(textGeneration) }} />
}
