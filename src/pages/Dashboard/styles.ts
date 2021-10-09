import styled, { css } from 'styled-components';

interface FormProps {
  hasError: boolean;
}

export const Title = styled.h1 `
  max-width: 470px;
  font-weight: 700;
  font-size: 48px;
  margin-top: 100px;
  color: #3A3A3A;
`;

export const Form = styled.form<FormProps> `
  margin-top: 40px;
  max-width: 700px;
  display: flex;
  align-items: center;

    input { 
      padding: 8px 16px;
      height: 60px;
      border: 0;
      color: #3A3A3A;
      font-weight: 500;
      font-size: 16px;
      background-color: #fff;
      border-radius: 8px 0 0 8px;
      flex: 1;

      ${(props) => props.hasError && css`
        background-color: #c53030;
        
        &::placeholder {
          color: #fff;
        }
      `}

      &:focus {
        outline: 0;
      }
    }

    button { 
      height: 60px;
      width: 200px;
      font-weight: 500;
      font-size: 16px;
      background-color: #04D361;
      color: #fff;
      border: 0;
      border-radius: 0 8px 8px 0;
      transition: .3s ease;

      &:hover {
        background-color: #04D351;
      }
    }
`;

export const Repos = styled.section `
  max-width: 700px;
  margin-top: 60px;
  

 a {
  background-color: #fff;
  border-radius: 8px;
  padding: 20px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  transition: .3s ease;

  & + a {
    margin: 16px 0 36px 0;
  }
  
  img {
    width: 64px;
    height: 64px;
    border-radius: 50%;
  }

    div {
      margin: 0 16px;
      flex: 1;

      strong {
      color: #3D3D4D;
      font-size: 18px;
      }

    p {
      color: #A8A8B3;
      font-size: 14px;
      margin-top: 4px;
    }
  }

  svg {
    color: #A8A8B3;
    transition: .3s ease;
  }

  &:hover {
    transform: translate3d(20px, 0, 0);
    box-shadow: 2px 2px 100px rgba(0, 0, 0, 0.1);
    svg {
      color: #3D3D4D;
      transform: translate3d(16px, 0, 0);
    }
  }
}
`;

export const Error = styled.span `
  display: block;
  font-weight: 700;
  color: #c53030;
  margin-top: 16px;
`;