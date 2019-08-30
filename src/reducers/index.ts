import { State } from '../types';
import { ADD_USER, CHANGE_FETCH_USER_DATA_BTN_DISABLE, myAction } from '../actions';

const initialState: State = {
  users: [],
  isFetchUserDataBtnDisabled: false
};

export default (state = initialState, action: myAction): State => {
  switch (action.type) {
    case CHANGE_FETCH_USER_DATA_BTN_DISABLE: {
      return {
        ...state,
        isFetchUserDataBtnDisabled: action.isDisabled
      }
    }

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