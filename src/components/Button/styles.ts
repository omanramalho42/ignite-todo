import styled from "styled-components";

interface ButtonProps {
  color: 'primary' | 'secondary'
}

export const Button = styled.button<ButtonProps>`
  display: flex;

  width: 90px;

  border: none;

  transition: all 0.250s;
  &:hover {
    background-color: var(--blue);
  }

  padding: 14px;
  
  justify-content: center;
  align-items: center;

  gap: 8px;

  border-radius: 8px;

  background-color: var(${({ color }) =>  
    color === 'primary' 
    ? '--blue-dark'
    : color === 'secondary' 
    ? '--gray-500' 
    : '--gray-700'
  });
  color: var(--gray-100);
`;