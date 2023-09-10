import styled from "styled-components";

export const Container = styled.div`
  padding: 0 350px;

  transition: padding 0.225s;

  @media only screen and (max-width: 1400px) {
    padding: 0 100px;
  }

  @media only screen and (max-width: 800px) {
    padding: 0 20px;
  }
`;

export const Actions = styled.div`
  display: flex; 
  gap: 8px; 
  
  align-items: center;
  
  position: relative; 
  top: -20px;
`;

export const Content = styled.div`
  display: flex;

  justify-content: space-between;
  
  margin-top: 65px;
`;

export const Card = styled.div`
  display: flex;
  padding: 64px 24px;

  transition: padding 0.225s;
  @media only screen and (max-width: 1200px) {
    align-items: flex-start;
    padding: 30px 0px;
  }

  background-color: transparent;
  
  flex-direction: column;
  justify-content: center;

  margin-top: 24px;

  border-radius: 8px;
  border-top: 1px solid var(--gray-400);

  align-items: center;
  
  gap: 16px;
  
  align-self: stretch;
`;

export const Badge = styled.span`
  display: flex;
  flex-direction: column;
  
  padding: 2px 8px;
  
  justify-content: center;
  align-items: center;

  gap: 10px;

  color: var(--gray-200);

  font-size: 12px;
  font-weight: 700;

  border-radius: 999px;
  background: var(--gray-400);
`;

export const ContentText = styled.div`
  display: flex;
  
  justify-content: center; 
  align-items: center; 

  gap: 8px;
`;

export const ItemCard = styled.div`
  display: flex;
  padding: 16px;

  @media only screen and (max-width: 1200px) {
    align-items: flex-start;
    padding: 10px;
  }
  
  justify-content: space-between;
  align-self: stretch;
  
  gap: 12px;

  border-radius: 8px;
  border: 1px solid var(--gray-400, #333);

  background: var(--gray-500, #262626);
  box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.06);
`;

export const CheckBox = styled.input.attrs({ type: 'checkbox' })`
  @media only screen and (max-width: 1200px) {
    width: 14px;
    height: 14px;
  }
  width: 17px;
  height: 17px;
  flex-shrink: 0;
`;

interface ButtonCheckBoxProps {
  value: boolean;
}

export const ButtonCheckBox = styled.button<ButtonCheckBoxProps>`
  all: unset;
  @media only screen and (max-width: 1200px) {
    width: 14px;
    height: 14px;
  }

  width: 17px;
  height: 17px;
  
  border-radius: 50%;

  text-align: center;
  line-height: 10%;
  
  transition: background-color 0.125s;

  border: 1px solid var(${({ value }) => 
    !value ? '--blue' 
    : '--purple'
  });

  background-color: var(${({ value }) => 
    value ? '--purple' 
    : 'transparent'
  });
`;