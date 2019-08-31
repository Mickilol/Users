import React from 'react';
import { FetchedUserDataState, UserState } from '../../types';
import { Form, Field } from 'react-final-form';
import { debounce } from 'lodash';

import './CreateComponentStyles.css';
import { Link } from 'react-router-dom';

export interface CreateComponentProps {
  fetchUserDataErrorMessage: string;
  fetchedUserData?: FetchedUserDataState;
  isAGroupAvailable: boolean;

  onAddUser: (user: UserState) => void;
  onFetchUserData: (userName: string) => void;
}

export default class CreateComponent extends React.Component<CreateComponentProps> {
  readonly debouncedFunc: ((value: string) => void);

  constructor(props: CreateComponentProps) {
    super(props);

    this.debouncedFunc = debounce(this.props.onFetchUserData, 1000);
  }

  render() {
    const { fetchedUserData, isAGroupAvailable } = this.props;

    return (
      <div className='create-page'>
        <h1 className='create-page__title'>
          Страница добавления пользователя
        </h1>

        <div className='home-link'>
          <Link to='/'>На главную</Link>
        </div>

        <div>
          <div className='form-wrapper'>
            <div className='field-wrapper'>
              <label className='field-label'>Логин</label>
              <input type='text' onChange={this.handleChange} placeholder='Логин' className='field-input'/>
            </div>
          </div>

          <div className='fetched-user-data'>
            <h3 className='fetched-user-data__title'>Загруженные данные пользователя</h3>
            <div className='fetched-user-data__list'>
              {this.fetchedUserData()}
            </div>
          </div>

          <Form
            onSubmit={this.handleSubmitAddUserForm}
            render={({handleSubmit, values}) => (
              <form onSubmit={handleSubmit} className='form-wrapper'>
                <div className='field-wrapper'>
                  <label className='field-label'>Группа</label>
                  <Field
                    name='group'
                    component='select'
                    className='field-select'
                  >
                    <option/>
                    {isAGroupAvailable && <option value='a-group'>Группа А</option>}
                    <option value='b-group'>Группа B</option>
                    <option value='c-group'>Группа С</option>
                  </Field>
                </div>

                <div className='field-wrapper'>
                  <label className='field-label'>Комментарий</label>
                  <Field
                    name='comment'
                    component='textarea'
                    placeholder='Напишите комментарий'
                    className='field-textarea'
                  />
                </div>

                <div className='buttons-wrapper'>
                  <button
                    type='submit'
                    disabled={fetchedUserData === undefined || values.group === undefined}
                    className='button'
                  >
                    Добавить пользователя
                  </button>
                </div>
              </form>
            )}
          />
        </div>

      </div>
    )
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    this.debouncedFunc(value);
  };

  fetchedUserData = () => {
    const { fetchUserDataErrorMessage, fetchedUserData } = this.props;

    if (!fetchUserDataErrorMessage && fetchedUserData !== undefined) {
      return (
        <>
          <div className='fetched-user-data__list-item'>
            <label> Логин </label>
            <span> {fetchedUserData.login} </span>
          </div>
          <div className='fetched-user-data__list-item'>
            <label> Email </label>
            <span> {fetchedUserData.email} </span>
          </div>
          <div className='fetched-user-data__list-item'>
            <label> Имя </label>
            <span> {fetchedUserData.name} </span>
          </div>
        </>
      )
    }

    return (
      <div className='fetched-user-data__error'>
        {fetchUserDataErrorMessage}
      </div>
    )
  };

  handleSubmitAddUserForm = (values: any) => {
    const { fetchedUserData, onAddUser } = this.props;

    const userDataToAdd: UserState = {
      ...values,
      ...fetchedUserData
    };

    onAddUser(userDataToAdd);
  }

}