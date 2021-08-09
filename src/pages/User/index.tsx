import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import SVG from 'react-inlinesvg';

import githubExplorerImg from '../../assets/github-explorer.svg';
import backIcon from '../../assets/back.svg';

import './styles.scss'
import { Repository } from '../../components/Repository';

export type IUserRepo = {
  id: number;
  forks: number;
  name: string;
  watchers: number;
  html_url: string;
  stargazers_count: number;
  description: string;
}

export function User(props: any) {
  const { 
    login, 
    avatar_url, 
    bio, 
    followers, 
    following, 
    name 
  } = props.location.state;
  const history = useHistory()

  console.log(props.location.state)

  const [ userRepos, setUserRepos ] = useState<IUserRepo[]>([]);

  function handleGoBack() {
    history.push('/')
  }

  async function fetchUserRepos() {
    try{
      const {data} = await api.get(`${login}/repos`);
      setUserRepos(data);
    } catch {
      console.log('Usuário sem repositórios');
    }
  }

  useEffect(() => {
    fetchUserRepos();
  }, [])

  console.log(userRepos);

  return(
    <div className="wrapper">
      <header className="header">
          <button onClick={handleGoBack}><SVG src={backIcon} /></button>
          <img src={githubExplorerImg} alt="Logo"/>
      </header>
      <div className="user">
        <img src={avatar_url} className="user-avatar" alt="Imagem do usuário"/>
        <div className="user-info">
          <div className="user-name">
            <h1>{name}</h1>
            <h2>@{login}</h2>
          </div>
            <p>{bio}</p>
          <div className="user-follows">
            <p><span>{userRepos.length}</span> repositories</p>
            <p><span>{followers}</span> followers</p>
            <p><span>{following}</span> following</p>
          </div>
        </div>
      </div>
      {userRepos.map(repo => {
        return (
          <Repository content={repo} key={repo.id}/>
        )
      })}
    </div>
  )
}