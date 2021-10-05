import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { FiChevronRight } from 'react-icons/fi';
import { api } from "../../services/api";
import logo from '../../assets/Logo.svg';
import { Title, Form, Repos, Error } from "./styles";

interface GithubRepository  {
  full_name: string,
  description: string,
  owner: {
    login: string,
    avatar_url: string,
  };
}

export const Dashboard: React.FC = () => {
  const [repos, setRepos] = useState<GithubRepository[]>(() => {
    const storageRepos = localStorage.getItem('@findmeGithub:repositories');

    if (storageRepos) {
      return JSON.parse(storageRepos);
    }
    return [];
  });
  const [newRepo, setNewRepo] = useState('');
  const [inputError, setInputError] = useState('');

  useEffect(() => {
    localStorage.setItem('@findmeGithub:repositories', JSON.stringify(repos));
  }, [repos]);

  function handleInputChange(event: ChangeEvent<HTMLInputElement>): void {
    setNewRepo(event.target.value);
  }

  async function handleAddRepo(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();
    if (!newRepo) {
      setInputError('Informe o username/repositório');
      return;
    }

    const response = await api.get<GithubRepository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepos([...repos, repository]);
    setNewRepo('');
  }

  return (
    <>
    <img src={logo} alt="Logo do Find me Github" />
      <Title>Encontre repositórios no Github.</Title>

      <Form hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
        <input 
          type="text"
          placeholder="username/repository_name"
          onChange={handleInputChange} 
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repos>

        {repos.map(repository => (
          <a href="/repositories" key={repository.full_name}>
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description ?? 'Nenhuma descrição disponível'}</p>
            </div>
            <FiChevronRight size={20} />
          </a>
        ))}
      </Repos>
    </>
  );
};
