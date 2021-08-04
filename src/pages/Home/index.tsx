import React from "react";
import SVG from 'react-inlinesvg';

import api from '../../services/api';

import githubExplorerImg from '../../assets/github-explorer.svg';
import searchIcon from '../../assets/search.svg';

import './styles.scss';

import { useState } from "react";
import { useHistory } from "react-router-dom";

export function Home() {
  const [ user, setUser ] = useState("");
  const history = useHistory();

  function handleChange(event: any) {
    setUser(event.target.value)
  }

  async function handleSubmit() {
    try{
      const fetchUser = await api.get(`${user}`);

      history.push({
        pathname: `user/${user}`,
        state: fetchUser.data,
      });
    } catch (error) {
      alert("Usuário não encontrado");
    }
  }
  
  return (
    <div className="home-page">
      <SVG src={githubExplorerImg} className="logo" />
      <div>
        <input type="text" placeholder="Pesquise por um usuário do Github" value={user} onChange={handleChange} className="profile-input"/>
        <button type="submit" className="search-button" onClick={handleSubmit}><SVG src={searchIcon}/></button>
      </div>
    </div>
    
  )
}