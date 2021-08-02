import React from "react";
import SVG from 'react-inlinesvg';

import githubExplorerImg from '../../assets/github-explorer.svg';
import searchIcon from '../../assets/search.svg';

import './styles.scss';

export function Home() {
  return (
    <div className="home-page">
      <SVG src={githubExplorerImg} className="logo" />
      <div>
        <input type="text" placeholder="Pesquise por um usuário do Github" className="profile-input"/>
        <button type="submit" className="search-button"><SVG src={searchIcon}/></button>
      </div>
    </div>
    
  )
}