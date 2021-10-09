import React from "react";
import { Link, useRouteMatch } from 'react-router-dom';
import { FiChevronLeft } from 'react-icons/fi';
import { Header } from './styles';
import logo from '../../assets/Logo.svg';

interface RepositoryParams { 
  repository: string;
}

export const Repo: React.FC = () => {
  const { params } = useRouteMatch<RepositoryParams>();
  return (
    <>
      <Header>
        <img src={logo} alt="Logo do Findme Github" />
        <Link to="/">
          <FiChevronLeft />
          Voltar
        </Link>
      </Header>
    </>
  );
};