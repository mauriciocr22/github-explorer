import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';
import SVG from 'react-inlinesvg';

import githubExplorerImg from '../../assets/github-explorer.svg';
import backIcon from '../../assets/back.svg';

import './styles.scss'

export function User(props: any) {
  const { login, avatar_url, bio, followers, following, id } = props.location.state;
  const history = useHistory()

  console.log(props.location.state)

  const [ userRepos, setUserRepos ] = useState();

  function handleGoBack() {
    history.push('/')
  }

  async function fetchUserRepos() {
    try{
      const fetchUserRepos = await api.get(`${login}/repos`);
      setUserRepos(fetchUserRepos.data);
    } catch {
      console.log('Usuário sem repositórios');
    }
  }

  useEffect(() => {
    fetchUserRepos();
  }, [])

  console.log(userRepos);

  return(
    <>
    <header className="header">
        <img src={githubExplorerImg} alt="Logo"/>
        <SVG src={backIcon} onClick={handleGoBack}/>
    </header>
    <div className="user">
      <img src={avatar_url} className="user-avatar" alt="Imagem do usuário"/>
      <div className="user-info">
        <p>@{login}</p>
        <p>{bio}</p>
        <p>{followers} followers {following} following</p>
      </div>
    </div>
    </>
  )
}