import styled from "styled-components";

interface TypographyProps {
  color:  'primary' | 'secondary' | 'light' | 'default';
  size:   'small' | 'medium' | 'large' | 'default';
  type:   'bold' | 'regular';
  align:  'center' | 'right' | 'left';
  decoration: 'line-through' | 'none';
}

export const Typography = styled.h1<TypographyProps>`
  color: var(${({ color, decoration }) =>
    decoration === 'line-through' 
    ? '--gray-300' 
    : color === 'primary' 
    ? '--blue' 
    : color === 'secondary' 
    ? '--purple'
    : color === 'light' 
    ? '--gray-100' 
    : '--gray-300'
  });

  font-size: ${({ size }) => 
    size === 'small' 
    ? 12 
    : size === 'medium' 
    ? 16 
    : size === 'large' 
    ? 18 
    : 14
  }px;
  
  font-weight: ${({ type }) => 
    type === 'bold' 
    ? 'bold' 
    : 'normal'
  };

  text-align: ${({ align }) => 
    align === 'center' 
    ? 'center'
    : align === 'left' 
    ? 'left' 
    : 'right'
  };

  transition: all 0.225s;
  text-decoration: ${({ decoration }) => decoration};
`;