import styled from 'styled-components';

export const Title = styled.h1 `
  max-width: 470px;
  font-weight: 700;
  font-size: 48px;
  margin-top: 100px;
  color: #3A3A3A;
`;

export const Form = styled.form `
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
      border-radius: 8px;
      flex: 1;

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

`;