import { State, UserState } from '../types';
import { addUser, fetchUserData, myAction } from '../actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import { ThunkDispatch } from "redux-thunk";
import CreateComponent from '../components/Create/CreateComponent';

const mapStateToProps = (state: State) => ({
  ...state
});

const mapDispatchToProps = (dispatch: Dispatch & ThunkDispatch<State, undefined, myAction>) => {
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