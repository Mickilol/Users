export interface State {
  users: UserState[];
  isFetchUserDataBtnDisabled: boolean;
  fetchedUserData?: FetchedUserDataState;
}

export interface UserState {
  login: string;
  email: string;
  name: string;
  group: string;
  comment: string;
}

export interface FetchedUserDataState {
  login: string;
  email: string;
  name: string;
}