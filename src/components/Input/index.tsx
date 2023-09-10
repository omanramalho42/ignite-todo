import React from 'react'
import { Input as InputCMP } from './styles'

interface InputProps {
  placeholder?: string;
}

const Input:React.FC<InputProps> = ({ placeholder }) => {
  return (
    <InputCMP 
      placeholder={placeholder}
    />
  )
}

export default Input