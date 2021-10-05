import React from "react";
import { FiChevronRight } from 'react-icons/fi';

import logo from '../../assets/Logo.svg';
import { Title, Form, Repos } from "./styles";

export const Dashboard: React.FC = () => {
  return (
    <>
    <img src={logo} alt="Logo do Find me Github" />
      <Title>Encontre repositórios no Github.</Title>

      <Form>
        <input 
          type="text"
          placeholder="nome_do_usuario/nome_do_repositorio" 
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repos>
        <a href="/repositories">
          <img src="" alt="Foto do repositório" />
          <div>
            <strong>Nome_usuario/letmeask</strong>
            <p>Repositório do projeto da NLW #6 da Rocketseat</p>
          </div>
          <FiChevronRight size={20}/>
        </a>
      </Repos>
    </>
  );
};
