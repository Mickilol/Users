import React from 'react';
import { UserState } from '../../types';

export interface CreateComponentProps {
  addUser: (user: UserState) => void;
  onFetchUserData: (userName: string) => void;
}

export default class CreateComponent extends React.Component<CreateComponentProps> {
  render() {
    return (
      <div className='create-page'>
        <h1>
          Страница добавления пользователя
        </h1>

        <div>
          <button onClick={this.handleClick}>Загрузить данные пользователя</button>
        </div>
      </div>
    )
  }

  handleClick = () => {
    this.props.onFetchUserData('artur');
  }
}