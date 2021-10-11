import styled from 'styled-components';

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    @media (max-width: 700px) {
      width: 50%;
    }
  }

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

export const RepoInfo = styled.section`
  margin-top: 80px;

  header {
    display: flex;
    align-items: center;

    img {
      width: 120px;
      height: 120px;
      border-radius: 50%;

      @media (max-width: 700px) {
        width: 60px;
        height: 60px;
      }
    }

    div {
      margin-left: 24px;

      strong {
        font-size: 36px;
        color: #3D3D4D;

        @media (max-width: 700px) {
          font-size: 24px;
        }
      }

      p {
        font-size: 18px;
        color: #737380;
        margin-top: 12px;

          @media (max-width: 700px) {
            font-size: 12px;
            margin-top: 0;
          }
      }
    }
  }

  ul {
    list-style: none;
    display: flex;
    margin-top: 40px;

    li {

      & + li {
        margin-left: 80px;

        @media (max-width: 700px) {
          margin-left: 36px;
        }
      }

      strong {
        display: block;
        font-size: 36px;
        color: #3D3D4D;

        @media (max-width: 700px) {
          font-size: 20px;
        }
      }
    }

    span {
      font-size: 20px;
      color: #737380;

      @media (max-width: 700px) {
        font-size: 12px;
      }
    }

    @media (max-width: 700px) {
      overflow-x: scroll;
    }
  }

`;

export const Issues = styled.section`
  max-width: 700px;
  margin-top: 80px;


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
    margin-top: 36px;
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

        @media (max-width: 700px) {
          font-size: 14px;
        }
      }

    p {
      color: #A8A8B3;
      font-size: 14px;
      margin-top: 4px;

      @media (max-width: 700px) {
        font-size: 12px;
      }
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

    @media (max-width: 700px) {
      transform: translate3d(0, 0, 0);
    }
  }
}
`;