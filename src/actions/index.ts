import { FetchedUserDataState, UserState } from '../types';
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

export const FETCH_USER_DATA = 'FETCH_USER_DATA';
export type FETCH_USER_DATA = typeof FETCH_USER_DATA;

export const fetchUserData = (userName: string) => (dispatch: Dispatch) => {

  return fetch(`https://api.github.com/users/${userName}`)
    .then(data => data.json())
    .then(data => {
      if (data.message === "Not Found") {
        dispatch(fetchUserDataFailure());
      } else {
        const userData: FetchedUserDataState = {
          login: data.login,
          email: data.email,
          name: data.name
        };

        dispatch(fetchUserDataSuccess(userData));
      }
    })
};

export const FETCH_USER_DATA_SUCCESS = 'FETCH_USER_DATA_SUCCESS';
export type FETCH_USER_DATA_SUCCESS = typeof FETCH_USER_DATA_SUCCESS;

export interface FetchUserDataSuccessAction {
  type: FETCH_USER_DATA_SUCCESS;
  userData: FetchedUserDataState;
}

export const fetchUserDataSuccess = (userData: FetchedUserDataState): FetchUserDataSuccessAction => {
  return {
    type: FETCH_USER_DATA_SUCCESS,
    userData
  }
};

export const FETCH_USER_DATA_FAILURE = 'FETCH_USER_DATA_FAILURE';
export type FETCH_USER_DATA_FAILURE = typeof FETCH_USER_DATA_FAILURE;

export interface FetchUserDataFailureAction {
  type: FETCH_USER_DATA_FAILURE;
}

export const fetchUserDataFailure = (): FetchUserDataFailureAction => {
  return {
    type: FETCH_USER_DATA_FAILURE
  }
};


export type IAction =
  | AddUserAction
  | FetchUserDataSuccessAction
  | FetchUserDataFailureAction;