import React from "react";
import { IUserRepo } from "../../pages/User";
import { AiOutlineFork, AiOutlineStar, AiOutlineEye } from 'react-icons/ai'

type IRepository = {
  content: IUserRepo;
}

export function Repository({content: {
  description,
  forks,
  name,
  stargazers_count,
  html_url,
  watchers,
}}: IRepository) {

  return (
    <a href={html_url}>
      <h1>{name}</h1>
      <p>{description}</p>
      <ul>
        <li>{forks}<AiOutlineFork /></li>
        <li>{stargazers_count}<AiOutlineStar /></li>
        <li>{watchers}<AiOutlineEye /></li>
      </ul>
    </a>   
  )
}