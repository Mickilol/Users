import { UserState } from '../types';
import { Dispatch } from 'redux';

export const ADD_USER = 'ADD_USER';
export type ADD_USER = typeof ADD_USER;

export interface AddUserAction {
  type: ADD_USER;
  payload: UserState
}

export function addUser(user: UserState): AddUserAction {
  return {
    type: ADD_USER,
    payload: user
  }
}

export const CHANGE_FETCH_USER_DATA_BTN_DISABLE = 'CHANGE_FETCH_USER_DATA_BTN_DISABLE';
export type CHANGE_FETCH_USER_DATA_BTN_DISABLE = typeof CHANGE_FETCH_USER_DATA_BTN_DISABLE;

export interface ChangeFetchUserDataBtnDisableAction {
  type: CHANGE_FETCH_USER_DATA_BTN_DISABLE;
  isDisabled: boolean;
}

export function changeFetchUserDataBtnDisable(isDisabled: boolean): ChangeFetchUserDataBtnDisableAction {
  return {
    type: CHANGE_FETCH_USER_DATA_BTN_DISABLE,
    isDisabled
  }
}

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export type FETCH_USER_DATA = typeof FETCH_USER_DATA;

export const fetchUserData = (userName: string) => (dispatch: Dispatch) => {
  dispatch(changeFetchUserDataBtnDisable(true));

  return fetch(`https://api.github.com/users/${userName}`)
    .then(data => data.json())
    .then(data => {
      console.log(data);
      if (data.message === "Not Found") {
        throw new Error("No such user found!!");
      } else {
        dispatch(changeFetchUserDataBtnDisable(false));
      }
    })
};


export type myAction =
  | AddUserAction
  | ChangeFetchUserDataBtnDisableAction;