import React from 'react'
import { Typography as TypographyCPN } from './styles'

interface TypographyProps {
  text: string;
  type?:  'bold' | 'regular';
  color?: 'primary' | 'secondary' | 'light' | 'default';
  size?:  'small' | 'medium' | 'large' | 'default';
  align?: 'center' | 'left' | 'right';
  decoration?: 'line-through' | 'none';
}

const Typography:React.FC<TypographyProps> = ({ 
  text, 
  size = 'default', 
  color = 'default',
  type = 'regular',
  align = 'center',
  decoration = 'none'
}) => {
  return (
    <TypographyCPN 
      size={size}
      color={color}
      type={type}
      align={align}
      decoration={decoration}
    >
      { text }
    </TypographyCPN>
  )
}

export default Typography