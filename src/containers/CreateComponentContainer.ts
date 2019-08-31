import { FetchedUserDataState, State, UserState } from '../types';
import { addUser, fetchUserData, IAction } from '../actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import CreateComponent from '../components/Create/CreateComponent';

// Обычно здесь используется функция-сепаратор, которая разделяет CreateComponentProps на state props и dispatch props
// чтобы не было такого дублирования

export interface CreateComponentStateProps {
  fetchUserDataErrorMessage: string;
  fetchedUserData?: FetchedUserDataState;
  isAGroupAvailable: boolean;
}

export interface CreateComponentDispatchProps {
  onAddUser: (user: UserState) => void;
  onFetchUserData: (userName: string) => void;
}

const mapStateToProps = (state: State): CreateComponentStateProps => {
  const { fetchedUserData, fetchUserDataErrorMessage } = state;
  let isAGroupAvailable = false;

  if (fetchedUserData !== undefined && fetchedUserData.login.toLowerCase().match('^[a-e,n-p,z]')) {
    isAGroupAvailable = true;
  }

  return {
    fetchedUserData,
    fetchUserDataErrorMessage,
    isAGroupAvailable
  }
};

const mapDispatchToProps = (
  dispatch: Dispatch & ThunkDispatch<State, undefined, IAction>
): CreateComponentDispatchProps => {
  return {
    onAddUser: (user: UserState) => {
      dispatch(addUser(user));
    },
    onFetchUserData: (userName: string) => {
      dispatch(fetchUserData(userName));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateComponent);