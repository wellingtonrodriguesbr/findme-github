import React, { ChangeEvent, FormEvent, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
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
  const formEl = useRef<HTMLFormElement | null>(null);

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

    try {
      const response = await api.get<GithubRepository>(`repos/${newRepo}`);
      const repository = response.data;

      setRepos([...repos, repository]);
      formEl.current?.reset();
      setNewRepo('');
      setInputError('');
    } catch {
      setInputError('Repositório não encontrado');
    }

  }

  return (
    <>
    <img src={logo} alt="Logo do Find me Github" />
      <Title>Encontre repositórios no Github.</Title>

      <Form ref={formEl} hasError={Boolean(inputError)} onSubmit={handleAddRepo}>
        <input 
          type="text"
          placeholder="Informe o username/repositório"
          onChange={handleInputChange} 
        />
        <button type="submit">Pesquisar</button>
      </Form>

      {inputError && <Error>{inputError}</Error>}
      <Repos>

        {repos.map((repository, index) => (
          <Link 
            to={`/repositories/${repository.full_name}`} 
            key={repository.full_name + index}
            >
            <img src={repository.owner.avatar_url} alt={repository.owner.login} />
            <div>
              <strong>{repository.full_name}</strong>
              <p>{repository.description ?? 'Nenhuma descrição disponível'}</p>
            </div>
            <FiChevronRight size={20} />
          </Link>
        ))}
      </Repos>
    </>
  );
};
