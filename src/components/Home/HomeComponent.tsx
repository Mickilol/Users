import React from 'react';
import { Link } from 'react-router-dom';

import './HomeStyles.css';

export default class HomeComponent extends React.Component<{}> {
  render() {
    return (
      <div className='home-page'>
        <h1>
          Home page
        </h1>

        <nav className='home-page__nav'>
          <Link to='/create'> Добавить пользователя </Link>

          <Link to='/list'> Посмотреть список пользователей </Link>
        </nav>
      </div>
    )
  }
}