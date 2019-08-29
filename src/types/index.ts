export interface State {
  users: UserState[];
}

export interface UserState {
  login: string;
  mail: string;
  name: string;
  group: string;
  comment: string;
}