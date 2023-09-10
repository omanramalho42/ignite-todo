import React from 'react'
import { Button as ButtonCPM } from './styles'
import { Typography } from '..';

interface ButtonProps {
  color:      'primary' | 'secondary';
  colorText?: 'light';
  text:       string;
  icon?:      React.ReactNode;
}

const Button:React.FC<ButtonProps> = ({ color, text, icon, colorText = 'light' }) => {
  return (
    <ButtonCPM color={color}>
      <Typography 
        color={colorText} 
        size='small' 
        text={text} 
      />
      <div style={{ position: 'relative', top: '1.5px' }}>
        {icon && (
          icon
        )}
      </div>
    </ButtonCPM>
  )
}

export default Button