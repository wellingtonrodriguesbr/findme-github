import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
      display: flex;
      align-items: center;
      color: #A8A8B3;
      transition: .3s ease;
      font-weight: 700;

      svg {
        transition: .3s ease;
        margin-right: 10px;
      }

      &:hover {
        color: #3D3D4D;

        svg {
          color: #3D3D4D;
          transform: translate3d(-10px, 0, 0);
        }
      }
    }
`;