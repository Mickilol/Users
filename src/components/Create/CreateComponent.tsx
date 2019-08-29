import React from 'react';
import { UserState } from '../../types';

export interface CreateComponentProps {
  addUser: (user: UserState) => void;
}

export default class CreateComponent extends React.Component<CreateComponentProps> {
  render() {
    return (
      <div className='create-page'>
        <h1>
          Create page
        </h1>

        <div>

        </div>
      </div>
    )
  }

}