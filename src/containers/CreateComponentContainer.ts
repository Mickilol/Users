import { State, UserState } from '../types';
import { addUser } from '../actions';
import { Dispatch } from 'redux';
import { connect } from 'react-redux';
import CreateComponent from '../components/Create/CreateComponent';

const mapStateToProps = (state: State) => ({
  ...state
});

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addUser: (user: UserState) => {
      dispatch(addUser(user));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CreateComponent);