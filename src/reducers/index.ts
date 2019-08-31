import { State } from '../types';
import {
  ADD_USER,
  FETCH_USER_DATA_FAILURE,
  FETCH_USER_DATA_SUCCESS,
  IAction
} from '../actions';

const initialState: State = {
  users: [],
  fetchUserDataErrorMessage: '',
};

export default (state = initialState, action: IAction): State => {
  switch (action.type) {

    case FETCH_USER_DATA_SUCCESS: {
      return {
        ...state,
        fetchUserDataErrorMessage: '',
        fetchedUserData: action.userData
      }
    }

    case FETCH_USER_DATA_FAILURE: {
      return {
        ...state,
        fetchedUserData: undefined,
        fetchUserDataErrorMessage: 'Пользователь с заданным логином не найден'
      }
    }

    case ADD_USER: {
      return {
        ...state,
        users: [
          ...state.users,
          action.payload
        ]
      }
    }


    default:
      return state;

  }
}