import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  
  justify-content: center;
  align-items: center;

  gap: 12px;

  height: 200px;
  
  background-color: #0D0D0D;
`;

interface ImageProps {
  size?: 'small' | 'medium' | 'large';
}

export const Image = styled.img<ImageProps>`
  object-fit: contain;
  
  width: ${({ size }) => 
    size === 'small' 
    ? 22 
    : size === 'medium' 
    ? 42 
    : size === 'large' 
    ? 56 
    : '100%'
  };
  height: auto;
`;