import { UserState } from '../types';

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