import { Action } from 'redux';
import { State } from '../types';
import { ADD_USER } from '../actions';

const initialState: State = {
  users: []
};

export default (state = initialState, action: Action): State => {
  switch (action.type) {
    case ADD_USER: {
      console.log('add user action', action);

      return {
        ...state
      }
    }


    default:
      return state;

  }
}